import React from "react";
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <h1>
                <span className="Redh1">Welcome</span>
                <span>to</span>
                <span className="Redh1">Cyber City</span>
                <span>Explorer</span></h1>
        )
    }
}

export default Header;