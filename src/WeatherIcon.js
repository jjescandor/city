import React from "react";
import { IoIosCloud } from "react-icons/io";
import { IoRainy } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoIosThunderstorm } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";

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
                {this.props.type === 'clear' &&
                    <IoSunnyOutline />}
                {this.props.type === 'snow' &&
                    <IoSnow />}
            </>
        )
    }
}

export default WeatherIcon;