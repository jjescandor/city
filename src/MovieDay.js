import React from 'react';
import './Movies.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class MovieDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.movie
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.state.movie);
    }
    render() {
        return (
            <Col key={this.props.idx}>
                <Card className='movieCard'>
                    <Card.Title class_name='movieTitle'>{this.props.movie.title}</Card.Title>
                    <Card.Img src={this.props.movie.img_url} alt='' onClick={this.handleClick} />
                </Card>
            </Col>
        );
    }
}


export default MovieDay;