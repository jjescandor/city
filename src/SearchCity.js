import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    handleClick = (evt) => {
        this.props.getLocation(this.state.searchQuery);
        evt.target.value = '';
    }

    handleKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            this.props.getLocation(this.state.searchQuery);
            evt.target.value = '';
        }
    }
    render() {
        return (
            <div className="App" onKeyPress={this.handleKeyPress}>
                <input placeholder='search for a city' onChange={(evt) => {
                    this.setState({ searchQuery: evt.target.value });
                }} />
                <button onClick={this.handleClick} >Click Me</button>
            </div>
        );
    }
}


export default SearchCity;