import React from "react";
import "./Movies.css";
import Row from 'react-bootstrap/Row';
import MovieDetails from './MovieDetails.js';
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

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

    render() {
        return (
            <>
                <Row xs={1} sm={2} md={3} className="movieDiv">
                    {this.props.movieResults &&
                        this.props.movieResults.map((value, idx) => {
                            return (
                                <Col key={idx}>
                                    <Card className='movieCard'>
                                        <Card.Title class_name='movieTitle'>{value.title}</Card.Title>
                                        <img src={`https://image.tmdb.org/t/p/w500${value.img_url}`} alt='' onClick={() => {
                                            this.setState({
                                                detailShow: true,
                                                movie: value
                                            })
                                        }} />
                                    </Card>
                                </Col>
                            )
                        })
                    };
                </Row>
                <MovieDetails
                    handleDetailClose={this.handleDetailClose}
                    movie={this.state.movie}
                    detailShow={this.state.detailShow}
                />
            </>
        )
    }
}

export default Movies;