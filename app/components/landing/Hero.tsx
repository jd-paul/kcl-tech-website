"use client";

import React, { useState, useEffect } from 'react';

import Button from '../buttons/Button';
import ButtonFancy from '../buttons/ButtonFancy';
import Navbar from '../Navbar';
import ImageOne from "../../images/picture-of-main.jpg";
import ImageTwo from "../../images/slideshow2.jpg";
import ImageThree from "../../images/slideshow3.jpg";
import ImageFour from "../../images/slideshow4.jpg";

// Event data
const events = [
    {
        title: "HackKing's",
        description: "200 Students | 12+ Hours | Amazing Prizes | Free Food | September 24, 2024",
        image: ImageOne,
        link: "https://www.kcltech.co.uk/hackkings.html",
        hex: "#FF5733"
    },
    {
        title: "TechSummit",
        description: "UK's Biggest Tech Career Fair | Bush House, London | October 7, 2023",
        image: ImageTwo,
        link: "techsummit.html",
        hex: "#33C1FF"
    },
    {
        title: "</HackLondon>",
        description: "KCL & UCL Hackathon | Bush House, London | March 9-10, 2024 | Amazing Prizes",
        image: ImageThree,
        link: "https://www.huzzle.app/events/hacklondon-126659",
        hex: "#28A745"
    },
];

const Hero = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEventIndex(prevIndex => (prevIndex < events.length - 1 ? prevIndex + 1 : 0));
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const eventElements = [
            document.getElementById('eventTitle'),
            document.getElementById('eventDescription'),
            document.getElementById('eventImage'),
            document.getElementById('learnMoreBtn')
        ];

        eventElements.forEach(element => {
            if (element) element.classList.remove('fade');
        });

        setTimeout(() => {
            const currentEvent = events[currentEventIndex];
            if (eventElements[0]) eventElements[0].innerText = currentEvent.title;
            if (eventElements[0]) eventElements[0].style.color = currentEvent.hex;
            if (eventElements[1]) eventElements[1].innerText = currentEvent.description;
            if (eventElements[2] instanceof HTMLImageElement) eventElements[2].src = currentEvent.image.src;
            if (eventElements[3]) eventElements[3].setAttribute('href', currentEvent.link);

            eventElements.forEach(element => {
                if (element) element.classList.add('fade');
            });
        }, 10); // Small delay to trigger animation
    }, [currentEventIndex]);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative h-screen min-h-[42rem]">
            <Navbar />

            {/* Background image that changes with events */}
            <img
                src={events[currentEventIndex].image.src}
                alt="Slideshow Background"
                className="absolute inset-0 w-full h-full object-cover -z-1"
                style={{ filter: 'brightness(0.20)' }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="absolute left-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] text-left">
                    <h1 className="text-5xl font-share-tech font-bold text-main-color bg-white bg-opacity-80 p-2 mb-1">
                        Welcome to KCL Tech
                    </h1>
                    <h2 className="text-xl text-white mb-2 font-titillium">King's College London's Technology Society</h2>
                    <Button
                        id="becomeMemberBtn"
                        label="Become a Member"
                        onClick={() => window.open('https://www.kclsu.org/groups/activities/join/22559/', '_blank')}
                        type="white"
                    />
                </div>

                <div className="absolute right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] text-right">
                    <h1 id="eventTitle" className="event-title text-white text-3xl font-bold"></h1>
                    <h2 id="eventDescription" className="event-description text-white text-xl mt-2 mb-[0.5rem]"></h2>

                    <Button
                        id="learnMoreBtn"
                        type="white"
                        label="Learn More"
                        onClick={() => window.open(events[currentEventIndex].link, '_blank')}
                    />
                </div>
            </div>

            {isDropdownOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50"
                    onClick={toggleDropdown}
                >
                    <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg mt-16 w-full max-h-full overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <a href="index.html">
                                <img src="./images/logoicon.png" width="45px" alt="Inc Logo" />
                            </a>
                            <button onClick={toggleDropdown} className="text-main-color">
                                X
                            </button>
                        </div>
                        <ul className="flex flex-col items-center text-md font-share-tech font-bold">
                            <li className="cursor-pointer">Events Information</li>
                            <li>Staff Blogs</li>
                            <li>Sponsors</li>
                            <li>Student Opportunity Board</li>
                            <li>Become a Member</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
