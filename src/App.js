import './App.css';
import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Header from './Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationObj: "",
      mapResponse: "",
      APIerror: ""
    }
  }

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const locationResponse = await axios.get(url);
      console.log(locationResponse);
      this.setState({ locationObj: locationResponse.data[0] });
      this.getMap();
    } catch (e) {
      this.setState({ APIerror: "Your query encountered an error :(" });
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.getLocation();
    }
  }

  getMap = async () => {
    try {
      const mapUrlTwo = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=${10}&size=${500}x${500}&format=jpeg&maptype=<MapType>&markers=icon:large-purple-cutout|${this.state.locationObj.lat},${this.state.locationObj.lon}&markers=icon:large-purple-cutout|${this.state.locationObj.lat},${this.state.locationObj.lon}`;
      const mapResponse = await axios.get(mapUrlTwo);
      this.setState({ mapResponse: mapResponse.config.url });
    } catch (e) {
      this.setState({ APIerror: "The website is down :(" });
    }
  }
  render() {
    return (
      <>
        <Header />
        <div className="App" onKeyPress={this.handleKeyPress}>
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
          {this.state.APIerror &&
            <h1 className="errMsg">{this.state.APIerror}</h1>
          }
        </div>
      </>
    )
  }
}

export default App;
