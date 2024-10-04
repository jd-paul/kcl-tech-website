import React from 'react';
import dynamic from "next/dynamic";

import Navbar from '../components/Navbar';
import Button from "../components/buttons/Button";

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
                style={{ filter: "brightness(0.315)" }} // Dimming the image for text clarity
            />

            {/* If md and above, display this. */}
            <div className="slides-generic h-full hidden md:flex">
                <div className="content-generic h-full flex items-center justify-center">
                    <div className="flex items-center justify-center h-full w-full">
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col items-start">
                            <h1 className="font-playfair text-6xl font-black text-neutral-50">
                                TechSummit 2024
                            </h1>
                            <p className="font-playfair text-3xl font-normal italic text-neutral-50 mt-4">
                                Connect with top employers and discover career opportunities in tech
                                A <span className="text-accent-color-a">UCL</span> x <span className="text-accent-color-c">KCL</span> collaboration
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 flex flex-col items-end">
                            <div className="bg-dark-grey px-[2.5rem] py-[1.5rem] rounded-[5px] w-full md:w-[26rem] text-center">
                                <h1 className="font-exo text-neutral-50 font-black text-3xl">COMING SOON</h1>

                                <div className="border-2 border-neutral-50 px-4 py-2 text-center mt-3 mb-4">
                                    <h1 className="font-exo text-neutral-50 text-3xl">October 19, 2024</h1>
                                </div>

                                <Button type="ticket" label="Grab your FREE ticket!" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If sm and below, display this. */}
            <div className="slides-generic h-full block md:hidden">
                <div className="content-generic h-full relative top-[15%]">
                    <h1 className="font-playfair text-5xl font-black text-neutral-50 self-start">
                        TechSummit 2024
                    </h1>

                    {/* I want a line here that's to the left of the div containing my text. I want it to be unlimited length regardless of how long the user's screen is */}
                    <div className="flex items-center mt-2 mb-4 relative">
                        {/* Line before the text */}
                        <div className="flex-grow border-t border-neutral-50 mr-4" style={{ maxWidth: 'calc(100% - 15px)' }}></div>
                        {/* Text */}
                        <p className="font-playfair text-2xl font-normal italic text-neutral-50 max-w-[calc(100%-15px)]">
                            A <span className="text-accent-color-a">UCL</span> x <span className="text-accent-color-c">KCL</span> collaboration. We are a diversifiedsssssadjadjaskd
                            {/* Add more text if needed */}
                        </p>
                    </div>




                    <div className="bg-dark-grey py-[1.5rem] rounded-[5px] mt-6 w-full max-w-md text-center">
                        <h1 className="font-exo text-neutral-50 font-black text-3xl">COMING SOON</h1>

                        <div className="border-2 mx-[10%] border-neutral-50 px-4 py-2 text-center mt-3 mb-4">
                            <h1 className="font-exo text-neutral-50 text-3xl">October 19, 2024</h1>
                        </div>

                        <Button type="ticket" label="Grab your FREE ticket!" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;



{/* <div className="absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] flex flex-col items-start">
<h1 className="font-playfair text-6xl font-black text-neutral-50">
    TechSummit 2024
</h1>
<p className="font-playfair text-3xl font-normal italic text-neutral-50">
    Connect with top employers and discover career opportunities in tech
    A <span className="text-accent-color-a">UCL</span> x <span className="text-accent-color-c">KCL</span> collaboration
</p>
</div>

<div className="absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] flex flex-col items-end">
<div className="bg-dark-grey p-4 rounded-[5px] w-[26rem] text-center">
    <h1 className="font-exo text-neutral-50 font-black text-3xl">COMING SOON</h1>

    <div className="border-2 border-neutral-50 px-4 py-2 text-center mt-3 mb-4">
        <h1 className="font-exo text-neutral-50 text-3xl">10 19 2024 </h1>
    </div>

    <Button type="ticket" label="Grab your free ticket!" />
</div>
</div> */}