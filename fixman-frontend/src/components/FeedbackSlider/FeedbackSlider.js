import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import ServiceCard from "../Services/ServiceCard/ServiceCard";
import FeedbackSliderCard from "./FeedbackSliderCard/FeedbackSliderCard";

const FeedbackSlider = () => {

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

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://fixman-backend.herokuapp.com/api/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center m-5">What Our Clients Say</h2>
            <Carousel responsive={responsive} partialVisbile={true}  autoPlay={true} infinite={true} arrows={false} focusOnSelect={true}>
                {
                    reviews.map(data => <FeedbackSliderCard cardData={data} key={data._id}/>)
                }
            </Carousel>
        </div>
    );
};

export default FeedbackSlider;