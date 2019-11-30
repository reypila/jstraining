import convert from 'convert-units';
import * as Weathers from './../constants/weathers';

const getTemp = kelvin => {
    return parseInt(convert(kelvin).from('K').to('C').toFixed(2));
}
const getWeatherState = weather => {
    const { id } = weather;

    if (id < 300) {
        return Weathers.THUNDERSTORE;
    } else if (id < 400) {
        return Weathers.DRIZZLE;
    } else if (id < 600) {
        return Weathers.RAIN;
    } else if (id < 700) {
        return Weathers.SNOW;
    } else if (id === 800) {
        return Weathers.SUN;
    } else {
        return Weathers.CLOUD;
    }


}

const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;