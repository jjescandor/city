import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Weather.css';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
    render() {
        return (
            <div className='weatherDiv'>
                {this.props.weatherResponse &&
                    <h4 className='weatherH1'>WEATHER IN {this.props.city}</h4>}
                <Accordion className='forecastCont' defaultActiveKey="0">
                    {this.props.weatherResponse &&
                        this.props.weatherResponse.map((value, idx) =>
                            <WeatherDay
                                key={idx}
                                idx={idx}
                                type={value.type}
                                date={value.date}
                                description={value.description}
                            />
                        )}
                </Accordion>
            </div>
        )
    };
}


export default Weather;