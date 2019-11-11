import React from "react";
import WeatherIcons from 'react-weathericons';
import './style.css'
import * as Weather from './../../../constants/weathers';

import PropTypes from 'prop-types';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLEE
} from './../../../constants/weathers';

const icons = {
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLEE]: "day-showers",

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