import React from 'react'
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    RAIN,
    WINDY
} from './../../../constants/weathers';

import './style.css'

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;

    console.dir(data);

    return (<div className='weatherDataCont'>
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState}>
        </WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    })
}
export default WeatherData;