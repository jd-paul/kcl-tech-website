import React from 'react';

import NavbarBlack from '../components/NavbarBlack';
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";

const Page: React.FC = () => {
    const data = {
        title: "Event Title",
        author: "",
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
                    <div className="w-full p-4 bg-[#202020]">
                        <h1 className="text-3xl text-neutral-50 font-exo font-bold">KCL Tech Staff Blogs</h1>
                        <p className="text-neutral-200 font-light font-titillium text-xl">
                            An assortment of blogs written by committee members. Perspectives and expertise on topics related to the society's goals, events, and initiatives.
                        </p>
                    </div>


                    <button className='accordion'>
                        <h2>{data.title}</h2>
                        <h3>{data.author}</h3>
                        <p>{data.date}</p>
                    </button>
                    <div className='panel'>
                        <br />
                        <br />
                        <img src='./uploads/image.png' height='500' className='center' alt='Blog' />
                        <br />
                        <p>Liked by: </p>
                        <form method='post'>
                            <input type='submit' name='like' value='Like' />
                            <input type='hidden' name='blogID' value='' />
                        </form>
                        <br />
                    </div>
                </div>
            </div>
            <FooterContact />
            <SlidingFooter />
        </div>
    );

};

export default Page;