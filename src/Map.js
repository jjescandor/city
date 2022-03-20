import React from 'react';
import './Map.css';
import Card from 'react-bootstrap/Card';

class Map extends React.Component {
    render() {
        return (
            <div className='errContainer'>
                {this.props.locationObj.display_name &&
                    <Card className='cityCard'>
                        <h2>{this.props.locationObj.display_name}</h2>
                        <h3>Latitude: {parseInt(this.props.locationObj.lat)}</h3>
                        <h3>Longitude: {parseInt(this.props.locationObj.lon)}</h3>
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=${10}&size=${500}x${500}&format=jpeg&maptype=<MapType>&markers=icon:large-purple-cutout|${this.props.locationObj.lat},${this.props.locationObj.lon}&markers=icon:large-purple-cutout|${this.props.locationObj.lat},${this.props.locationObj.lon}`} alt={this.props.locationObj.display_name} />
                    </Card>
                }
            </div>
        );
    }
}


export default Map;