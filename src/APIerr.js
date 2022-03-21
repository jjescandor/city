import React from 'react';
import './APIerr.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { findAllByTestId } from '@testing-library/react';

class APIerr extends React.Component {
    render() {

        return (
            // <div className='errContainer'>
            //     {this.props.APIerror &&
            //         <h1 className="errMsg">{this.props.APIerror}</h1>}
            //     {this.props.weatherResponseErr &&
            //         <h1 className="errMsg">{this.props.weatherResponseErr}</h1>}
            // </div>
            <>
                {/* {this.props.APIerror && */}
                <Modal show={this.props.errShow}>
                    <Modal.Body>
                        <p>{this.props.APIerror}</p>
                        <p>{this.props.weatherResponseErr}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleErrClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default APIerr;