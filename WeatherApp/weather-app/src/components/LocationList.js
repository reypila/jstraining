import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation/index';

const LocationList = () => (
    <div>
        <WeatherLocation city='Buenos Aires,ar'></WeatherLocation>
        <WeatherLocation city='Bogota,col'></WeatherLocation>
        <WeatherLocation city='Mexico,mx'></WeatherLocation>
    </div>
);

export default LocationList;