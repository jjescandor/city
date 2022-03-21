import React from 'react';
import './APIerr.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';;

class APIerr extends React.Component {
    render() {
        return (
            <Modal show={this.props.errShow}>
                <Modal.Body className='errModal'>
                    <h4>{this.props.APIerror}</h4>
                    <h4>{this.props.weatherResponseErr}</h4>
                </Modal.Body>
                <Modal.Footer className='errModal'>
                    <Button className='errButton' onClick={this.props.handleErrClose} >Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default APIerr;