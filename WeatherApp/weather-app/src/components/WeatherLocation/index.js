import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';

const location = 'Buenos Aires,ar';
const api_key = '8d6bf15419511b237e8d1cfc2ea85ad1';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 2001,
    weatherState: 'rain',
    humidity: 2001,
    wind: '2001 m/s',
}

const dataB = {
    temperature: 4001,
    weatherState: 'snow',
    humidity: 4001,
    wind: '4001 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            city: '',
            data: null,
        };
    }
    getWeatherState = weather_data => {
        return 'SUN'
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handleUpdateClick = () => {

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState({
                data: newWeather
            })
            //console.log(data);
            debugger;
        });

        this.setState(({
            city: 'Barcelona',
            data: data
        }), () => {
            console.log('this set');
        })
    }

    render() {
        let { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                {
                    data ?
                        <WeatherData data={data}></WeatherData> :
                        "Cargando..."
                }
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }

}

export default WeatherLocation;
