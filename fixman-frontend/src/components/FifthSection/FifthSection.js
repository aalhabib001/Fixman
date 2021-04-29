import React from 'react';
import fifthImage from "../../images/undraw_fixing_bugs_w7gi.png"
import {Button, Col, Row} from "react-bootstrap";

const FifthSection = () => {
    return (
        <Row className="align-items-center mt-2">
            <Col xs={12} sm={12} md={6} lg={6}>
                <h1>Take Advantage of the Benefits and Services of our Specialists</h1>
                <p className="mt-3">Get the best customer service and efficient repairs from our technicians. Make an
                    inquiry today to get a flawless computer tomorrow.</p>
                <Button variant="success" className="mt-3">View All Services</Button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <img style={{width: '100%'}} src={fifthImage} alt="pc_fix_image"/>
            </Col>
        </Row>
    );
};

export default FifthSection;