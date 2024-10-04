import React from 'react';

import Navbar from '../components/Navbar';
import Button from "../components/buttons/Button";

import Robot from "../images/picture-tech-summit.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
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
            <div className="slides-generic h-full hidden lg:flex">
                <div className="content-generic h-full flex items-center justify-center">
                    <div className="flex items-center justify-center h-full w-full">
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col items-center">
                            <div className="flex flex-col items-start">
                                <h1 className="font-exo text-6xl font-black text-neutral-50">
                                    <span className="text-accent-color-a">Tech</span>
                                    <span className="text-accent-color-c">Summit</span> 2024
                                </h1>
                                <div className="pl-[0.5rem]">
                                    <p className="font-titillium text-2xl font-normal italic text-neutral-200">
                                        Connect with top employers like <b>Google</b>, <b>Microsoft</b>, <b>Barclays</b>, and many more!
                                    </p>
                                </div>
                                <div className="flex space-x-3 mt-[1.5rem]">
                                    <div className="rounded-full border border-neutral-50 text-neutral-50 font-exo px-4 py-2 inline-flex items-center">
                                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                        <div className="flex items-center">
                                            <span className="font-bold">Strand, Bush House</span>
                                            <span className="px-2">|</span>
                                            <span>King's College London</span>
                                        </div>
                                    </div>
                                    <div className="rounded-full border border-neutral-50 text-neutral-50 font-exo px-4 py-2 inline-flex items-center">
                                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                        <b>October 19, 2024</b>
                                    </div>
                                </div>
                                <Button type="ticket" label="Grab your FREE ticket!" className="mt-[0.5rem]" />
                            </div>
                        </div>



                        {/* Right Column */}
                        <div className="flex-1 flex flex-col items-center">
                            <FontAwesomeIcon icon={faCircle} className="text-neutral-50 text-[14rem]" />
                            <div className="flex space-x-3 mt-[1rem]">
                                <FontAwesomeIcon icon={faCircle} className="text-neutral-50 text-5xl" />
                                <FontAwesomeIcon icon={faCircle} className="text-neutral-50 text-5xl" />
                                <FontAwesomeIcon icon={faCircle} className="text-neutral-50 text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If sm and below, display this. */}
            <div className="slides-generic h-full block lg:hidden">
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


{/* <div className="bg-dark-grey px-[2.5rem] py-[1.5rem] rounded-[5px] w-full md:w-[26rem] text-center">
                                <h1 className="font-exo text-neutral-50 font-black text-3xl">COMING SOON</h1>

                                <div className="border-2 border-neutral-50 px-4 py-2 text-center mt-3 mb-4">
                                    <h1 className="font-exo text-neutral-50 text-3xl">October 19, 2024</h1>
                                </div>

                                <Button type="ticket" label="Grab your FREE ticket!" />
                            </div> */}