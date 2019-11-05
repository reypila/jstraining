import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            })
        });
    }

    render() {
        let { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                {
                    data ?
                        <WeatherData data={data}></WeatherData> :
                        <CircularProgress size={55}></CircularProgress>
                }
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }

}
WeatherLocation.protoTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherLocation;
