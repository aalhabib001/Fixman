import React, {useContext} from 'react';
import {Nav} from "react-bootstrap";
import './RightNav.css'
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

const RightNav = () => {
    const [loggedInUser] = useContext(UserContext)

    return (
        <Nav defaultActiveKey="/dashboard" className="flex-column background"
             style={{height: '1000px', paddingRight: '8rem'}}>
            <Link className="nav-link active text-white" to="/dashboard">Dashboard</Link>
            {
                loggedInUser.isAdmin &&
                    <Link className="nav-link active text-white" to="/dashboard/addService">Add Service</Link>

            }
            <Link className="nav-link active text-white" to="/order">Order Place</Link>
            <Link className="nav-link active text-white" to="/orders">Orders</Link>
            <Link className="nav-link active text-white" to="/review">Review</Link>
        </Nav>
    );
};

export default RightNav;