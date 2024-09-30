import React from 'react';
import dynamic from "next/dynamic";

import Navbar from '../components/Navbar';

import Robot from "../images/picture-tech-summit.jpg";

const EventCountdown = dynamic(() => import("./EventCountdown"), {
    ssr: false, // Disable server-side rendering for this component
});

const Hero: React.FC = () => {
    const eventDate = new Date("2024-10-19T10:00:00");

    return (
        <div className="relative h-screen min-h-[42rem]">
            <Navbar />
            {/* Background image */}
            <img
                src={Robot.src}
                alt="Event Background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.20)" }} // Dimming the image for text clarity
            />
            <div className="relative z-10 flex flex-col h-full">
                {/* Top section */}
                <div className="absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] text-left">
                    <h1 className="font-playfair text-6xl font-black text-neutral-100">
                        {/* THE UK'S BIGGEST STUDENT ENTREPRENEUR CAREERS FAIR */}
                        Unlock Your Future at <span className="text-accent-color-c">TechSummit 2024</span>!
                    </h1>
                    <p className="font-playfair text-4xl font-normal italic text-accent-color-a">
                        A UCL x KCL Tech collaboration brings you the biggest job fair of the year!
                    </p>
                </div>

                {/* Bottom section */}
                <div className="absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] text-right">
                    <div className="bg-accent-color-a p-4 rounded-[5px] w-[20rem]">
                        <EventCountdown eventDate={eventDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;