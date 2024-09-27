import React from 'react';

import NavbarBlack from '../components/NavbarBlack';
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
            <div>
                <NavbarBlack />
                <div className="slides-generic_light" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
                    <div className="content-generic">
                        <h1 className="font-playfair text-3xl font-bold text-neutral-900">
                            The UK's Biggest Student Entrepreneur Careers Fair
                        </h1>
                    </div>
                </div>
            </div>

            <FooterContact />
        </>

    );
};

export default Page;