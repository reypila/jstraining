import *  as AKAAPI from '../constants/api_url';
const getUrlWeatherByCity = city => {

    let { api_key, url_base_weather } = AKAAPI;
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;