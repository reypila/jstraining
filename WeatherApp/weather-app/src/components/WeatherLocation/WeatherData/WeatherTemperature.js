import React from "react";
import WeatherIcons from 'react-weathericons';
import './style.css'

import PropTypes from 'prop-types';

// const icons = {
//     cloud: "cloud",
//     cloudy: "cloudy",
//     sun: "sun",
//     rain: "rain",
//     snow: "snow",
//     windy: "windy"
// };

import {
    RAIN,
    WINDY
} from './../../../constants/weathers';

const icons = {
    // [CLOUD]: "cloud",
    // [CLOUDY]: "cloudy",
    // [SUN]: "day-sunny",
    [RAIN]: "rain",
    [WINDY]: "windy",
};

const getWeatherIcon = weatherState => {

    const icon = icons[weatherState];

    const sizeIcon = '4x';

    if (icon)
        return <WeatherIcons className='wicon'name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className='wicon'name={"day-sunny"} size={sizeIcon} />
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature}`}</span>
        <span>{` C .`}</span>

    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;