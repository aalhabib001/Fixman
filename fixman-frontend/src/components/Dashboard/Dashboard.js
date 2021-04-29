import React from 'react';
import {Nav} from "react-bootstrap";
import RightNav from "../RightNav/RightNav";

const Dashboard = () => {
    console.log(1)
    return (
        <div className="d-flex">
            <RightNav/>
            <div className="m-5">
                <h4>Hello, This is a dashboard Page</h4>
            </div>
        </div>
    );
};

export default Dashboard;