import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    RAIN,
    WINDY
} from './../../../constants/weathers';

import './style.css'

const icons = {
    // [CLOUD]: "cloud",
    // [CLOUDY]: "cloudy", 
    // [SUN]: "day-sunny",
    [RAIN]: "rain",
    [WINDY]: "windy"
};
const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature
            temperature={20}
            weatherState={RAIN}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;