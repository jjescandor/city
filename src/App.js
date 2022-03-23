import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import SearchCity from './SearchCity';
import Map from './Map';
import Weather from './Weather';
import APIerr from './APIerr';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: '',
      weatherResponse: '',
      weatherResponseErr: null,
      APIerror: '',
      errShow: false,
      city: ''
    }
  }

  getLocation = async (city) => {
    this.setState({ city: city });
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`;
      const locationResponse = await axios.get(url);
      this.setState({
        locationObj: locationResponse.data[0],
        APIerror: ""
      });
      this.getWeather();
    } catch (e) {
      this.setState({
        APIerror: e.message,
        locationObj: '',
        weatherResponse: '',
        weatherResponseErr: '',
        errShow: true,
        weatherType: ''
      });
    }
  }

  getWeather = async () => {
    try {
      const weatherUrl = `http://localhost:3001/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}&search=${this.state.city}`;
      const weatherResponse = await axios.get(weatherUrl);
      console.log(weatherResponse.data);
      if (weatherResponse.data.length > 0) {
        this.setState({
          weatherResponse: weatherResponse.data,
          weatherResponseErr: '',
          weatherType: weatherResponse.data[0].type
        })
      } else {
        this.setState({
          weatherResponseErr: `No available weather data for ${this.state.city} at this time`,
          errShow: true,
          weatherResponse: '',
          weatherType: ''
        });
      };
    } catch (e) {
      this.setState({
        APIerror: '',
        weatherResponseErr: e.message,
        errShow: true
      });
    }
  }

  handleErrClose = () => {
    this.setState({ errShow: false });
  }

  render() {
    return (
      <>
        <Header />
        <SearchCity getLocation={this.getLocation} />
        <Map locationObj={this.state.locationObj} weatherType={this.state.weatherType} />
        <Weather weatherResponse={this.state.weatherResponse} />
        <APIerr APIerror={this.state.APIerror} weatherResponseErr={this.state.weatherResponseErr} errShow={this.state.errShow} handleErrClose={this.handleErrClose} />
      </>
    )
  }
}

export default App;
