import React from 'react';
import './APIerr.css';

class APIerr extends React.Component {
    render() {
        return (
            <div className='errContainer'>
                {this.props.APIerror &&
                    <h1 className="errMsg">{this.props.APIerror}</h1>}
                {this.props.weatherResponseErr &&
                    <h1 className="errMsg">{this.props.weatherResponseErr}</h1>}
            </div>
        );
    }
}


export default APIerr;