import React from "react";
import './Restaurants.css';
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';

class Restaurants extends React.Component {
    render() {
        return (
            <div className="resDiv">
                {this.props.resResults &&
                    <h3 className="resH1">RESTAURANTS IN {this.props.city}</h3>}
                <Row xs={1} sm={2} md={3}>
                    {this.props.resResults &&
                        this.props.resResults.map((value, idx) => {
                            return (
                                <Col key={idx}>
                                    <Card className='resCard'>
                                        <Card.Title>{value.name}</Card.Title>
                                        <Card.Img className='resImg' src={value.img} alt='' />
                                        <Rating className="rating" ratingValue={value.rating * 20} />
                                        <h6>Phone Number: {value.phone}</h6>
                                        <h6>Address: {value.address}</h6>
                                    </Card>
                                </Col>
                            )
                        }
                        )}
                </Row>
            </div>
        )
    }
}

export default Restaurants;