import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Weather.css';


class WeatherDay extends React.Component {
    render() {
        return (
            <Accordion.Item className='forecastItem' eventKey={this.props.idx}>
                <img className='icon' src={this.props.icon} alt='' />
                <Accordion.Header className='forecastHeader' > {this.props.date} </Accordion.Header>
                <Accordion.Body > {this.props.description}</Accordion.Body>
            </Accordion.Item>
        )
    };
}

export default WeatherDay;


