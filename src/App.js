import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  // getLocation = async () => {
  //   const url = `https://us1.locationiq.com/v1/reverse.php?key=YOUR_ACCESS_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json`
  //   const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
  //   const locationResponse = 
  // }
  render() {
    return (
      <div>
        <input />
      </div>
    )
  }
}

export default App;
