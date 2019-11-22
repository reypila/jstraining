import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';

const LocationList = ({ cities }) => {
    console.log(cities);
    return (
        <div>
            <WeatherLocation city='Buenos Aires,ar'></WeatherLocation>
            <WeatherLocation city='Bogota,col'></WeatherLocation>
            <WeatherLocation city='Washington,us'></WeatherLocation>
            <WeatherLocation city='Madrid,es'></WeatherLocation>
            <WeatherLocation city='Mexico,mx'></WeatherLocation>
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;