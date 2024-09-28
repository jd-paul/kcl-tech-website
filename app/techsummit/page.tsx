import React from 'react';

import Navbar from '../components/Navbar';
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";

const Page: React.FC = () => {
    const data = {
        title: "Event Title",
        start: "10:00 AM",
        finish: "12:00 PM",
        date: "2023-10-01",
        location: "Event Location",
        bring: "Laptop, charger, and enthusiasm!",
        description: "Event description goes here."
    };

    return (
        <>
            <div style={{ backgroundColor: "#202020" }}>
                <Navbar />
                <div className="slides-generic_light">
                    <div className="content-generic">
                        <h1 className="font-playfair text-3xl font-bold text-neutral-100">
                            The UK's Biggest Student Entrepreneur Careers Fair
                        </h1>
                    </div>
                </div>
            </div>

            {/* <FooterContact /> */}
        </>

    );
};

export default Page;