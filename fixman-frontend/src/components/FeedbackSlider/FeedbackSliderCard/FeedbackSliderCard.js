import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const FeedbackSliderCard = (props) => {
    const {id, name, rating, comment} = props.cardData
    const cardStyle = {
        width: '15rem',
        borderRadius: '20px',
        boxShadow: '5px 20px 30px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#FFFFFF',
        border: 'none'
    }
    let stats = [];
    for (let i = 0; i < rating; i++) {
        stats.push('⭐');
    }

    return (
        <Card style={cardStyle} className="mb-5">

            <Card.Body className="p-2 pl-3 pr-3 mt-2">
                <Card.Title style={{marginBottom: '6px', fontSize: '18px'}}>{name}</Card.Title>
                <Card.Text style={{marginBottom: '6px', fontSize: '16px'}}>
                    {
                        stats.length ? stats : <br/>
                    }
                </Card.Text>
                <Card.Text style={{marginBottom: '6px', fontSize: '16px'}}>
                    {comment}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FeedbackSliderCard;