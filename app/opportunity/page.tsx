import React from 'react';

import NavbarBlack from '../components/NavbarBlack';
import Footer from "../components/Footer";
import About from "../components/landing/About";
import Hero from "../components/landing/Hero";
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
        <div>
            <NavbarBlack />
            <div className="slides-generic_light" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
                <div className="content-generic">
                    <div className="w-full p-4 bg-[#202020] mb-[1rem]">
                        <h1 className="text-3xl text-neutral-50 font-exo font-bold">Job Listings and Opportunities</h1>
                        <p className="text-neutral-200 font-light font-titillium text-xl">
                            A forum for posting and viewing job postings, internships, and other career-related opportunities. Postings are uploaded by committee and students.
                        </p>
                    </div>
                    <button className='accordion'>
                        <a style={{ textDecoration: 'none' }} href="#">
                            <h2><b>{data.title}</b></h2>
                        </a>
                        <p>
                            <b>Time:</b> {data.start} - {data.finish} <b>Date:</b> {data.date} <b>Location:</b> {data.location} <b>Bring:</b> {data.bring}
                        </p>
                    </button>
                    <div className='panel'>
                        <br />
                        <p>{data.description}</p>
                        <br />
                        <img src='./uploads2/image.png' height='500' className='center' alt="Event" />
                        <br />
                        <br />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;