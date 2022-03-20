import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Weather.css';

class Weather extends React.Component {
    render() {
        return (
            <>{this.props.weatherResponse &&
                <Accordion className='forecastCont' defaultActiveKey="0" flush>
                    {this.props.weatherResponse.map((value, idx) => {
                        return (
                            <Accordion.Item className='forecastItem' eventKey={idx} key={idx} flush>
                                <Accordion.Header className='forecastHeader'>{value.date}</Accordion.Header>
                                <Accordion.Body>
                                    {value.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })};
                </Accordion>
            }</>
        );
    }
}


export default Weather;