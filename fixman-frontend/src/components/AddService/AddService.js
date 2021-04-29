import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import RightNav from "../RightNav/RightNav";
import {useHistory} from "react-router-dom"
import axios from "axios";

const AddService = () => {
    let history = useHistory()

    const [bookImageStatus, setBookImageStatus] = useState("No Image")
    const [newService, setNewService] = useState({
        name: '',
        author: '',
        price: '',
        image: ''
    });

    const handleOnBlur = (event) => {
        const newServiceTemp = {...newService}
        newServiceTemp[event.target.id] = event.target.value
        setNewService(newServiceTemp)
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'ed071214eba59803f394436d3654d8c6')
        imageData.set('image', event.target.files[0])

        setBookImageStatus("Image Uploading");
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)

                const newBookTemp = {...newService}
                newBookTemp[event.target.id] = response.data.data.display_url
                setNewService(newBookTemp)
                setBookImageStatus("Uploaded");
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    const handleSubmit = (event) => {
        console.log(newService)
        let formData = {
            'serviceName': newService.name,
            'serviceInfo': newService.info,
            'price': newService.price,
            'imageLink': newService.image
        }

        axios({
            method: 'post',
            url: 'https://fixman-backend.herokuapp.com/api/services',
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
            <div className="m-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Service Name" required/>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Price" required/>
                    </Form.Group>
                    <Form.Group controlId="info">
                        <Form.Label>Info</Form.Label>
                        <Form.Control onBlur={handleOnBlur} as="textarea" rows={4}/>
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.File.Label>Book Image Upload</Form.File.Label>
                        <Form.Control onBlur={handleImageUpload} type="file"/>
                        <h6>{bookImageStatus}</h6>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddService;