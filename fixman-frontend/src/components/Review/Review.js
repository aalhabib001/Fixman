import React, {useContext, useState} from 'react';
import RightNav from "../RightNav/RightNav";
import {Button, Form} from "react-bootstrap";
import {UserContext} from "../../App";
import axios from "axios";

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [newReview, setNewReview] = useState({
        'rating': "",
        'comment': "",
    });

    const handleOnBlur = (event) => {
        console.log(event.target.value)
        const newServiceTemp = {...newReview}
        newServiceTemp[event.target.id] = event.target.value
        setNewReview(newServiceTemp)
    }

    const handleSubmit = (event) => {
        console.log(newReview)
        let formData = {
            'name': loggedInUser.name,
            'rating': newReview.rating,
            'comment': newReview.comment,
        }
        console.log(formData)
        axios({
            method: 'post',
            url: 'https://fixman-backend.herokuapp.com/api/reviews',
            headers: {'Content-Type': 'application/json'},
            data: formData
        })
            .then(r => {
                console.log(r.data)
                history.push('/dashboard/')
            })
            .catch(err => {
                console.log(err.data)
            })
        event.preventDefault();
    }

    return (
        <div className="d-flex">
            <RightNav/>
            <div>
                <Form className="m-5" onSubmit = {handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Names</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={loggedInUser.name} disabled/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={loggedInUser.email} disabled/>
                    </Form.Group>
                    <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" onChange={handleOnBlur} >
                            <option value="1">1 Star</option>
                            <option value="2">2 Star</option>
                            <option value="3">3 Star</option>
                            <option value="4">4 Star</option>
                            <option value="5">5 Star</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control onBlur={handleOnBlur}  as="textarea" rows={4}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Review;