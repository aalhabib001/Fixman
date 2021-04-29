import React, {useContext, useEffect, useState} from 'react';
import RightNav from "../RightNav/RightNav";
import {UserContext} from "../../App";
import {Form} from 'react-bootstrap'

const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser] = useContext(UserContext)

    useEffect(() => {
        let link;

        if (loggedInUser.isAdmin) {
            link = 'https://fixman-backend.herokuapp.com/api/orders'
        } else {
            link = 'https://fixman-backend.herokuapp.com/api/order/' + loggedInUser.email
        }

        fetch(link)
            .then(res => res.json())
            .then(data => setOrders(data.result))
            .catch(err => console.log(err))
    }, [])

    const onDropDownChange = (value) => {
        console.log(value)
    }

    return (
        <div className="d-flex">
            <RightNav/>
            <div className="m-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        loggedInUser.isAdmin
                            ? orders.map(order => <tr>
                                <th scope="row">{order.email}</th>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>

                                {/*<Form.Group>*/}
                                {/*    <Form.Control as="select" size="md">*/}
                                {/*        <option>Large select</option>*/}
                                {/*    </Form.Control>*/}
                                {/*</Form.Group>*/}


                            </tr>)

                            : orders.map(order => <tr>
                                <th scope="row">{order.email}</th>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;