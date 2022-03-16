import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      key: "pk.9706811213538caed737b6b522097a67"
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ searchQuery: event.target.value })
    this.getLocation();
  }

  getLocation = async () => {
    console.log(this.state.searchQuery);
    // const url = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&lat=LATITUDE&lon=LONGITUDE&format=json`
    const url = `https://us1.locationiq.com/v1/search.php?key=${this.state.key}&q=${this.state.searchQuery}& format=json`;
    const locationResponse = await axios.get(url);
    console.log(locationResponse.data[0]);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='search for a city' />
          <button>Explore!</button>
        </form>
      </div>
    )
  }
}

export default App;
