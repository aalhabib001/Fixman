import React from 'react';
import {Button, Form} from 'react-bootstrap'

const ContactForm = () => {
    return (
        <div className="mt-5">
            <h2 className="text-center mt-5">Contact With US</h2>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your Email"/>
                </Form.Group>
                <Form.Group controlId="massage">
                    <Form.Label>Your Massage</Form.Label>
                    <Form.Control as="textarea" rows={5}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;