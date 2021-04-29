import React from 'react';
import rocketIcon from "../../images/icons/shuttle.png"
import certifiedIcon from "../../images/icons/certified.png"
import logicalIcon from "../../images/icons/logical-thinking.png"
import WhyChooseCard from "./WhyChooseCard/WhyChooseCard";
import {Row} from "react-bootstrap";

const WhyChoose = () => {
    const fakeData = [
        {
            id: 12,
            icon: rocketIcon,
            title: "lorem ipsum",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi enim, auctor sit amet iaculis quis."
        },
        {
            id: 13,
            icon: logicalIcon,
            title: "lorem ipsum",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi enim, auctor sit amet iaculis quis."
        },
        {
            id: 14,
            icon: certifiedIcon,
            title: "lorem ipsum",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi enim, auctor sit amet iaculis quis."
        }
    ]
    return (

        <div className="m-0">
            <h2 className="text-center mt-5">Why Choose Us</h2>
            <p className="text-center mb-5">There are dozens of reasons why our clients choose Fixman as their computer
                service provider of choice.</p>
            <Row>
                {
                    fakeData.map(data => <WhyChooseCard cardData={data} key={data.id}/>)
                }
            </Row>

        </div>
    );
};

export default WhyChoose;