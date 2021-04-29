import React from 'react';
import thirdImage from "../../images/thrid_section_image.png"
import {Button, Col, Row} from "react-bootstrap";

const ThirdSection = () => {
    return (
        <Row className="align-items-center mt-2">
            <Col xs={12} sm={12} md={6} lg={6}>
                <img style={{width: '100%'}} src={thirdImage} alt="pc_fix_image"/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <h1>Who we are and How we Work</h1>
                <p className="mt-3">Fixman is one of the leading computer repair companies in the US providing services
                    for individuals and businesses. No matter what kind of a PC you have, we can fix it.</p>
                <Button variant="success" className="mt-3">View All Services</Button>
            </Col>
        </Row>
    );
};

export default ThirdSection;