import React from 'react';
import {Card, Col} from "react-bootstrap";

const WhyChooseCard = (props) => {
    const {id, icon, title, info} = props.cardData
    const cardStyle = {
        width: '15rem',
        borderRadius: '20px',
        boxShadow: '5px 20px 30px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#FFFFFF',
        border: 'none'
    }

    return (
        <Col>
            <Card style={cardStyle} className="mb-5">

                <div className="text-center pt-4" style={{backgroundColor: '#F1F1F1', borderRadius: '20px', height: '7rem'}}>
                    <Card.Img style={{width: '60px'}} className="p-0" variant="top" src={icon}/>
                </div>

                <Card.Body className="p-2 pl-3 pr-3 mt-2">
                    <Card.Title style={{marginBottom: '6px', fontSize: '18px'}}>{title}</Card.Title>
                    <Card.Text style={{marginBottom: '6px', fontSize: '16px'}}>
                        {info}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default WhyChooseCard;