import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    handleChange = (evt) => {
        this.setState({ searchQuery: evt.target.value });
    }

    handleClick = (evt) => {
        this.props.getLocation(this.state.searchQuery);
        evt.target.value = '';
    }

    handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            this.props.getLocation(this.state.searchQuery);
            evt.target.value = '';
        }
    }
    render() {
        return (
            <div className="App" onKeyDown={this.handleKeyDown}>
                <input placeholder=' search for a city or a zip code' onChange={this.handleChange} />
                <button onClick={this.handleClick} >Search</button>
            </div>
        );
    }
}


export default SearchCity;