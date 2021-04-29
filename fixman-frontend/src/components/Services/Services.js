import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1020 },
            items: 4
        },
        laptop: {
            breakpoint: { max: 1020, min: 770 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 770, min: 550 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 550, min: 0 },
            items: 1
        }
    };

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://fixman-backend.herokuapp.com/api/services")
            .then(res => res.json())
            .then(data => setServices(data.result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="m-0">
            <h2 className="text-center mt-5">What We Offer</h2>
            <p className="text-center mb-5">We provide various computer repair services and solutions for our new and regular customers. Feel free to find out more below.</p>
            <Carousel responsive={responsive} partialVisbile={true} autoPlay={true} infinite={true} arrows={false} focusOnSelect={true}>
                {
                    services.map(data => <ServiceCard cardData={data} key={data._id}/>)
                }
            </Carousel>
        </div>
    );
};


export default Services;