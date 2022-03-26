import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Weather.css';
import WeatherIcon from './WeatherIcon.js';


class WeatherDay extends React.Component {
    render() {
        return (
            <Accordion.Item className='forecastItem' eventKey={this.props.idx}>
                <WeatherIcon type={this.props.type} />
                <Accordion.Header className='forecastHeader' > {this.props.date} </Accordion.Header>
                <Accordion.Body > {this.props.description}</Accordion.Body>
            </Accordion.Item>
        )
    };
}

export default WeatherDay;


