import React from "react";
import "./Movies.css";
import Row from 'react-bootstrap/Row';
import MovieDetails from './MovieDetails.js';
import MovieDay from './MovieDay.js';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailShow: false,
            movie: {}
        }
    }

    handleDetailClose = () => {
        this.setState({ detailShow: false });
    }

    handleClick = (movie) => {
        this.setState({
            detailShow: true,
            movie: movie
        });
    }

    render() {
        return (
            <div className="movieDiv">
                {this.props.movieResults &&
                    <h4 className="movieH1">MOVIES ABOUT {this.props.city}</h4>}
                <Row xs={1} sm={2} md={3}>
                    {this.props.movieResults &&
                        this.props.movieResults.map((value, idx) =>
                            <MovieDay
                                key={idx}
                                movie={value}
                                idx={idx}
                                handleClick={this.handleClick}
                            />
                        )};
                </Row>
                <MovieDetails
                    handleDetailClose={this.handleDetailClose}
                    movie={this.state.movie}
                    detailShow={this.state.detailShow}
                />
            </div>
        )
    }
}

export default Movies;