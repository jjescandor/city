import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import SearchCity from './SearchCity';
import Map from './Map';
import Weather from './Weather';
import Movies from './Movies';
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
      city: '',
      movieResults: null,
      movieResErr: ''
    }
  }

  getLocation = async (city) => {
    this.setState({ city: city.toUpperCase() });
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`;
      const locationResponse = await axios.get(url);
      this.setState({
        locationObj: locationResponse.data[0],
        APIerror: ""
      });
      this.getWeather();
      this.getMovies();
    } catch (e) {
      this.setState({
        APIerror: e.message,
        locationObj: '',
        weatherResponse: '',
        weatherResponseErr: '',
        errShow: true,
        weatherType: '',
        movieResErr: ''
      });
    }
  }

  getWeather = async () => {
    try {
      const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}&search=${this.state.city}`;
      const weatherResponse = await axios.get(weatherUrl);
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
          movieResErr: '',
          weatherType: ''
        });
      };
    } catch (e) {
    }
  }

  getMovies = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/movies?query=${this.state.city}`;
      const movieResults = await axios.get(url);
      this.setState({ movieResults: movieResults.data });
      console.log(movieResults.data);
      if (movieResults.data.length <= 0) {
        this.setState({
          movieResErr: `NO MOVIES ABOUT ${this.state.city} AT THIS TIME`,
          movieResults: null,
          errShow: true,
        });
      }
    } catch (e) {
      this.setState({
        movieResults: null
      })
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
        <Map
          locationObj={this.state.locationObj}
          weatherType={this.state.weatherType}
        />
        <Weather
          weatherResponse={this.state.weatherResponse}
          city={this.state.city}
        />
        <Movies
          movieResults={this.state.movieResults}
          city={this.state.city}
        />
        <APIerr
          APIerror={this.state.APIerror}
          weatherResponseErr={this.state.weatherResponseErr}
          errShow={this.state.errShow}
          handleErrClose={this.handleErrClose}
          movieResErr={this.state.movieResErr}
        />
      </>
    )
  }
}

export default App;
