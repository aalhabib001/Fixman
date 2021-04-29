import React from 'react';
import FirstSection from "../FirstSection/FirstSection";
import Services from "../Services/Services";
import ThirdSection from "../ThirdSection/ThirdSection";
import "./Homepage.css"
import FeedbackSlider from "../FeedbackSlider/FeedbackSlider";
import WhyChoose from "../WhyChoose/WhyChoose";
import ContactForm from "../ContactFrom/ContactForm";
import FifthSection from "../FifthSection/FifthSection";

const Homepage = () => {
    return (
        <div className="container-xl mb-5">
            <FirstSection/>
            <Services/>
            <ThirdSection/>
            <FeedbackSlider/>
            <FifthSection/>
            <WhyChoose/>
            <ContactForm/>
        </div>
    );
};

export default Homepage;