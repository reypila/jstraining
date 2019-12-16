import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 10,
    wind: 'normal',
}
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];
class ForecastExtended extends Component {

    renderForecastItemDays() {
        return (
            days.map(day => (<ForecastItem weekDay={day} hour={10} data = {data}></ForecastItem>)
            ))
    }
    render() {
        const { city } = this.props;
        return (<div>
            <h2 className='forecast-title'>
                Pronóstico Extendido para {city}
            </h2>
            {
                this.renderForecastItemDays()
            }
        </div>)
    }
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;