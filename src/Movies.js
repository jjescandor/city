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
            <div className="movieDiv">
                {this.props.movieResults &&
                    <h4 className="movieH1">MOVIES ABOUT {this.props.city}</h4>}
                <Row xs={1} sm={2} md={3}>
                    {this.props.movieResults &&
                        this.props.movieResults.map((value, idx) => {
                            return (
                                <Col key={idx}>
                                    <Card className='movieCard'>
                                        <Card.Title class_name='movieTitle'>{value.title}</Card.Title>
                                        <Card.Img src={value.img_url} alt='' onClick={() => {
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
            </div>
        )
    }
}

export default Movies;