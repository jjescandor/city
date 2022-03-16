import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationObj: ""
    }
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
    const locationResponse = await axios.get(url);
    console.log(locationResponse.data[0].display_name);
    console.log(locationResponse.data[0].lat);
    console.log(locationResponse.data[0].lon);
    this.setState({ locationObj: locationResponse.data[0] });
  }
  render() {
    return (
      <div className="App">
        <input placeholder='search for a city' onChange={(evt) => {
          this.setState({ searchQuery: evt.target.value })
        }} />
        <button onClick={this.getLocation} >Click Me</button>
        {this.state.locationObj.display_name &&
          <>
            <h2>{this.state.locationObj.display_name}</h2>
            <h3>Latitude: {this.state.locationObj.lat}</h3>
            <h3>Longitude: {this.state.locationObj.lon}</h3>
          </>
        }
      </div>
    )
  }
}

export default App;
