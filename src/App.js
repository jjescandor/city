import './App.css';
import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationObj: "",
      mapResponse: ""
    }
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    const locationResponse = await axios.get(url);
    this.setState({ locationObj: locationResponse.data[0] });
    this.getMap();
  }

  getMap = async () => {
    const mapUrlTwo = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=${13}&size=${300}x${500}&format=jpeg&maptype=<MapType>&markers=icon:large-purple-cutout|${this.state.locationObj.lat},${this.state.locationObj.lon}&markers=icon:large-purple-cutout|${this.state.locationObj.lat},${this.state.locationObj.lon}`;
    const mapResponse = await axios.get(mapUrlTwo);
    console.log(mapResponse.data);
    this.setState({ mapResponse: mapResponse.config.url });
  }
  render() {
    return (
      <div className="App">
        <input placeholder='search for a city' onChange={(evt) => {
          this.setState({ searchQuery: evt.target.value })
        }} />
        <button onClick={this.getLocation} >Click Me</button>
        {this.state.locationObj.display_name &&
          <Card className='cityCard'>
            <h2>{this.state.locationObj.display_name}</h2>
            <img src={this.state.mapResponse} alt="this" />
            <h3>Latitude: {parseInt(this.state.locationObj.lat)}</h3>
            <h3>Longitude: {parseInt(this.state.locationObj.lon)}</h3>
          </Card>
        }
      </div>
    )
  }
}

export default App;
