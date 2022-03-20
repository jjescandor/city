import './App.css';
import React from 'react';
import axios from 'axios';
import Map from './Map';
import Header from './Header';
import Weather from './Weather';
import APIerr from './APIerr';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationObj: "",
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
        </div>
        <Map locationObj={this.state.locationObj} />
        <Weather weatherResponse={this.state.weatherResponse} />
        <APIerr APIerror={this.state.APIerror} weatherResponseErr={this.state.weatherResponseErr} />
      </>
    )
  }
}

export default App;
