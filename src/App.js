import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.city.value);
    this.setState({ searchQuery: evt.target.city.value })
    this.getLocation();
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
    const locationResponse = await axios.get(url);
    console.log(locationResponse.data[0]);
    this.setState({ locationObj: locationResponse.data[0] });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='city' placeholder='search for a city' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default App;
