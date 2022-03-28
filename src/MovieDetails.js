import React from "react";
import './MovieDetails.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MovieDetails extends React.Component {
    render() {
        return (
            <Modal show={this.props.detailShow} className='detailModal'>
                <Modal.Header>{this.props.movie.title}</Modal.Header>
                <Modal.Body className='detailModalBody'>
                    <img
                        className="movieModal"
                        src={`https://image.tmdb.org/t/p/w500${this.props.movie.img_url}`}
                        alt={this.props.movie.original_title}
                    />
                    <p>Release Date: {this.props.movie.release_date}</p>
                    <p>Rating: {this.props.movie.rating}</p>
                    <p>{this.props.movie.overview}</p>
                </Modal.Body>
                <Modal.Footer className='detailModalFooter'>
                    <Button className='detailModalButton' onClick={this.props.handleDetailClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default MovieDetails;