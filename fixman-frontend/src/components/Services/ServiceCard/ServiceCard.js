import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const ServiceCard = (props) => {
    const {_id, serviceName, serviceInfo, price, imageLink} = props.cardData
    const cardStyle = {
        width: '15rem',
        borderRadius: '20px',
        boxShadow: '5px 20px 30px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#FFFFFF',
        border: 'none'
    }
    let link = "/order/"+_id

    return (
        <Card style={cardStyle} className="mb-5">

            <div style={{backgroundColor: '#F1F1F1', borderRadius: '20px', height: '9rem'}} >
                <Card.Img style={{borderRadius: '20px'}} className="p-0" variant="top" src={imageLink}/>
            </div>

            <Card.Body className="p-2 pl-3 pr-3 mt-2">
                <Card.Title style={{marginBottom: '6px', fontSize: '18px'}}>{serviceName}</Card.Title>
                <Card.Text style={{marginBottom: '6px', fontSize: '16px'}}>
                    {serviceInfo}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center" style={{margin: '2px'}}>
                    <div>
                        <h4 className="text-primary" style={{fontSize: '20px'}}>${price}</h4>
                    </div>
                    <div>
                        <Button variant="primary" className="p-1" style={{fontSize: '14px'}}><Link to={link}
                                                                                                   className="text-white">Buy
                            Now</Link></Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;