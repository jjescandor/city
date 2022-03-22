import React from "react";
import { IoIosCloud } from "react-icons/io";
import { IoRainy } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";

class WeatherIcon extends React.Component {
    render() {
        return (
            <>
                {this.props.type === 'cloud' &&
                    <IoIosCloud />}
                {this.props.type === 'rain' &&
                    <IoRainy />}
                {this.props.type === 'sun' &&
                    <IoSunny />}
                {this.props.type === 'thunder' &&
                    <IoIosThunderstorm />}
            </>
        )
    }
}

export default WeatherIcon;