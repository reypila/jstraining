import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';


const ForecasItem = ({ weekDay, hour , data }) => (
    <div>


        <div> {weekDay} Hora: {hour} hs </div>
        <WeatherData data={data}></WeatherData>
    </div>
)

ForecasItem.protoType = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}
export default ForecasItem;