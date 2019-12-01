import React, { Component } from 'react'
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';

const strToComponents = (cities) => {
    return cities.map(city => <WeatherLocation key={city} city={city} />)
    // Another way
    // debugger;
    // let tmp = [];
    // for (let index = 0; index < cities.length; index++) {
    //     const element = cities[index];
    //     tmp.push(<WeatherLocation key={index} city={element} />);
    // }
    // return tmp;
};

const LocationList = ({ cities }) => {
    return (
        <div>
            {strToComponents(cities)
                /* <WeatherLocation city='Buenos Aires,ar'></WeatherLocation>
                <WeatherLocation city='Bogota,col'></WeatherLocation>
                <WeatherLocation city='Washington,us'></WeatherLocation>
                <WeatherLocation city='Madrid,es'></WeatherLocation>
                <WeatherLocation city='Mexico,mx'></WeatherLocation> */
            }
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;