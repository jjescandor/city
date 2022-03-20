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
      weatherResponse: '',
      weatherResponseErr: null,
      APIerror: ""
    }
  }

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const locationResponse = await axios.get(url);
      this.setState({ locationObj: locationResponse.data[0] });
      this.setState({ APIerror: "" });
      this.getWeather();
      this.getMap();
    } catch (e) {
      this.setState({ APIerror: e.message });
      this.setState({ locationObj: "" });
      this.setState({ weatherResponse: null });
    }
  }

  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.getLocation();
      evt.target.value = '';
    }
  }

  getMap = async () => {
    try {
      const mapUrlTwo = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=${10}&size=${500}x${500}&format=jpeg&maptype=<MapType>&markers=icon:large-purple-cutout|${this.state.locationObj.lat},${this.state.locationObj.lon}&markers=icon:large-purple-cutout|${this.state.locationObj.lat},${this.state.locationObj.lon}`;
      const mapResponse = await axios.get(mapUrlTwo);
      this.setState({ mapResponse: mapResponse.config.url });
      this.setState({ APIerror: "" });
    } catch (e) {
      this.setState({ APIerror: e.message });
      this.setState({ locationObj: "" });
    }
  }

  getWeather = async () => {
    try {
      const weatherUrl = `http://localhost:3001/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}`;
      const weatherResponse = await axios.get(weatherUrl);
      if (weatherResponse.data.length > 0) {
        this.setState({ weatherResponse: weatherResponse.data })
        this.setState({ weatherResponseErr: null });
      } else {
        this.setState({ weatherResponseErr: "No available weather data for this city at this time" });
        this.setState({ weatherResponse: '' });
      };
    } catch (e) {
      this.setState({ weatherResponseErr: e.message });
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="App" onKeyPress={this.handleKeyPress}>
          <input placeholder='search for a city' onChange={(evt) => {
            this.setState({ searchQuery: evt.target.value });
          }} />
          <button onClick={this.getLocation} >Click Me</button>
          {this.state.locationObj.display_name &&
            <Card className='cityCard'>
              <h2>{this.state.locationObj.display_name}</h2>
              <h3>Latitude: {parseInt(this.state.locationObj.lat)}</h3>
              <h3>Longitude: {parseInt(this.state.locationObj.lon)}</h3>
              <img src={this.state.mapResponse} alt={this.state.locationObj.display_name} />
            </Card>
          }
          {this.state.weatherResponse &&
            <>
              {this.state.weatherResponse.map((value, idx) => {
                return <h2 key={idx}>{value.description}</h2>
              })};
            </>
          }
          {this.state.APIerror &&
            <h1 className="errMsg">{this.state.APIerror}</h1>}

          {this.state.weatherResponseErr &&
            <h1 style={{ margin: 'auto' }}>{this.state.weatherResponseErr}</h1>}
        </div>
      </>
    )
  }
}

export default App;
