import React from 'react';
import './Map.css';
import Card from 'react-bootstrap/Card';


class Map extends React.Component {
    render() {
        return (
            <div className='errContainer'>
                {this.props.locationObj.display_name &&
                    <Card className='cityCard'>
                        <img className='iconA' src={this.props.icon} alt='' />
                        <Card.Title>{this.props.locationObj.display_name}</Card.Title>
                        <Card.Title>Latitude: {parseInt(this.props.locationObj.lat)}</Card.Title>
                        <Card.Title>Longitude: {parseInt(this.props.locationObj.lon)}</Card.Title>
                        <p>Date sourced: {this.state.date}</p>
                        {!this.props.weatherType &&
                            <h3 className='placeholder'>placeholder</h3>}
                        <img className='mapImg' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=${10}&size=${500}x${500}&format=jpeg&maptype=<MapType>&markers=icon:large-purple-cutout|${this.props.locationObj.lat},${this.props.locationObj.lon}&markers=icon:large-purple-cutout|${this.props.locationObj.lat},${this.props.locationObj.lon}`} alt={this.props.locationObj.display_name} />
                    </Card>
                }
            </div>
        );
    }
}


export default Map;