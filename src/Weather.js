import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Weather.css';
import { IoIosCloud } from "react-icons/io";
import { IoRainy } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";

class Weather extends React.Component {
    render() {
        return (
            <>{this.props.weatherResponse &&
                <Accordion className='forecastCont' defaultActiveKey="0">
                    {this.props.weatherResponse.map((value, idx) => {
                        return (
                            <Accordion.Item className='forecastItem' eventKey={idx} key={idx}>
                                {value.type === 'cloud' &&
                                    <IoIosCloud />}
                                {value.type === 'rain' &&
                                    <IoRainy />}
                                {value.type === 'sun' &&
                                    <IoSunny />}
                                {value.type === 'thunder' &&
                                    <h3><IoIosThunderstorm /></h3>}
                                <Accordion.Header className='forecastHeader'>{value.date}</Accordion.Header>

                                <Accordion.Body>
                                    {value.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            }</>
        );
    }
}


export default Weather;