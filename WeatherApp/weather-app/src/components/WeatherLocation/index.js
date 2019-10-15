import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import { SUN } from './../../constants/weathers';

const data = {
    temperature: 7,
    weatherState: SUN,
    humidity: 11,
    wind: '11 m/s',
}

class WeatherLocation extends Component {

    render() {
        return (
            <div className='weatherLocationCont'>
                <Location city={"Santiago"}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }

}

export default WeatherLocation;
