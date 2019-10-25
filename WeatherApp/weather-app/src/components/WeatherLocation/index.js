import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_weather';

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
            city: 'Mexico',
            data: dataB,
        };
    }



    handleUpdateClick = () => {

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.dir(data);
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            })
            //.log(data);
            debugger;
        });

        this.setState(({
            city: 'Barcelona',
            data: data
        }), () => {
            //console.log('this set');
        })
    }

    render() {
        let { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }

}

export default WeatherLocation;
