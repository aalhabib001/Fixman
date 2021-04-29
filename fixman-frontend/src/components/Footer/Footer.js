import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import facebookIcon from "../../images/icons/facebook.png"
import twitterIcon from "../../images/icons/twitter.png"
import youtubeIcon from "../../images/icons/youtube.png"
import {Link} from "react-router-dom";

const Footer = () => {
    const socialIconStyle = {
        borderRadius: '50%',
        width: '45px',
        border: '1px solid darkGray',
        padding: "1.5px"
    };

    return (
        <div style={{marginLeft: '10rem', marginRight: '10rem', paddingBottom: '2rem', paddingTop: '2rem'}}>
            <Row className="">
                <Col>
                    <div className="d-flex align-items-baseline mb-3">
                        <h2 className="mr-2">Fixman</h2>
                        <p>Computer Repair</p>
                    </div>
                    <p className="mb-3">Call Us for Any Question:</p>
                    <h3 className="mb-3">+88 01515 ******</h3>
                    <h6 className="mb-3">Ashulia Model Town, Savar, Dhaka</h6>
                    <h6 className="mb-3"><a href="mailto:contact@fixman.com">contact@fixman.com</a></h6>

                    <div className="d-flex">
                        <Link to="/" className="nav-link active text-dark">
                            <img style={socialIconStyle} src={facebookIcon} alt='fb'/>
                        </Link>
                        <Link to="/" className="nav-link active text-dark">
                            <img style={socialIconStyle} src={twitterIcon} alt='tw'/>
                        </Link>
                        <Link to="/" className="nav-link active text-dark">
                            <img style={socialIconStyle} src={youtubeIcon} alt='yt'/>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>Subscribe to Newsletter</h2>
                        <p>Sign up for our e-mail and be the first to know about our special offers!</p>
                        <Form.Group controlId="emailF" className="d-flex align-items-center">
                            <Form.Control type="emailF" placeholder="Your Email" style={{borderRadius: '15px'}}/>
                            <Button variant="warning" type="submit" className="mt-0 ml-1" style={{borderRadius: '15px'}}>
                                Subscribe
                            </Button>
                        </Form.Group>
                    </div>
                    <Row>
                        <Col>
                            <p>Who We Are</p>
                            <p>Services</p>
                            <p>Pricing</p>
                        </Col>
                        <Col>
                            <p>Laptop Repair / Computer Repair</p>
                            <p>Cleaning Laptops / Replacing Thermal Paste</p>
                            <p>Data Recovery</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h6 className="text-center mt-5">© 2021 FIXMAN</h6>
        </div>
    );
};

export default Footer;