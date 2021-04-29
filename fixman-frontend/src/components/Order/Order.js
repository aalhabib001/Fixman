import React, {useContext, useEffect, useState} from 'react';
import RightNav from "../RightNav/RightNav";
import {Button, Form} from 'react-bootstrap'
import {UserContext} from "../../App";
import {useParams} from "react-router-dom"
import axios from "axios";

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {serviceId} = useParams()
    console.log(serviceId)
    const [oderInfo, setOrderInfo] = useState([])

    const handleOnBlur = (event) => {
        console.log(event.target.value)
        const newOrderInfoTemp = {...oderInfo}
        newOrderInfoTemp[event.target.id] = event.target.value
        setOrderInfo(newOrderInfoTemp)
    }


    const [services, setServices] = useState("")
    useEffect(() => {
        fetch("https://fixman-backend.herokuapp.com/api/services/"+serviceId)
            .then(res => res.json())
            .then(data => setServices(data.result))
            .catch(err => console.log(err))
    }, [serviceId])


    const handleSubmit = (event) => {
        console.log(oderInfo)
        let formData = {
            "serviceId": services._id,
            "name": services.serviceName,
            "email": loggedInUser.email,
            "price": services.price,
            "status": "Placed",
            "date": new Date().getDate()
        }

        axios({
            method: 'post',
            url: 'https://fixman-backend.herokuapp.com/api/orders',
            headers: {'Content-Type': 'application/json'},
            data: formData
        })
            .then(r => {
                console.log(r.data)
                history.push('/orders/')
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
                <Form className="m-5" onSubmit={handleSubmit}>
                    {
                        console.log(services)
                    }
                    <h4>Service Info</h4>
                    <h6>{services.serviceName}</h6>
                    <h6>{services.price}</h6>
                    <h6>{services.serviceInfo}</h6>
                    <br/>
                    <Form.Group controlId="name">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter name" value={loggedInUser.name}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleOnBlur} type="email" placeholder="Enter email" value={loggedInUser.email}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Order;