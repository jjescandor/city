import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Weather.css';
import WeatherIcon from './WeatherIcon.js';

class Weather extends React.Component {
    render() {
        return (
            <div className='weatherDiv'>
                {this.props.weatherResponse &&
                    <h4 className='weatherH1'>WEATHER IN {this.props.city}</h4>}
                <Accordion className='forecastCont' defaultActiveKey="0">
                    {this.props.weatherResponse &&
                        this.props.weatherResponse.map((value, idx) => {
                            return (
                                <Accordion.Item className='forecastItem' eventKey={idx} key={idx}>
                                    <WeatherIcon type={value.type} />
                                    <Accordion.Header className='forecastHeader'>{value.date}</Accordion.Header>
                                    <Accordion.Body>{value.description}</Accordion.Body>
                                </Accordion.Item>
                            )
                        })}
                </Accordion>
            </div>
        )
    };
}


export default Weather;