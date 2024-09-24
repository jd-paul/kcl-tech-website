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
                    <h2>Blog</h2>
                    <br />
                    <a href="addBlog.html"><h4>Submit a blog</h4></a>
                    <br /><br />

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