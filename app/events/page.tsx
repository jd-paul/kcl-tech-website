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
                        <section className="type-a">
                            <h2>Upcoming Events</h2><br />
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
                        </section>

                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Europe%2FLondon&title&src=ZmEwZTE2MzVkNWVlZjkyYWFmZDc4ZjgzZDg3YTM2ZWM0OTkxNTNiNjcwZDUzNmNkMDY2YjRlYTA3ZDQ5MjQxYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26"
                            style={{ border: 'solid 1px #777', marginTop: '1rem' }} width="100%" height="600" frameBorder="0"
                            scrolling="no"></iframe>
                        <br />
                        <a
                            href="https://calendar.google.com/calendar/ical/fa0e1635d5eef92aafd78f83d87a36ec499153b670d536cd066b4ea07d49241a%40group.calendar.google.com/public/basic.ics">
                            <h4>Subscribe (Click to add to your calendar)</h4>
                        </a>
                        <br />
                        <a href="https://calendar.google.com/calendar/embed?src=fa0e1635d5eef92aafd78f83d87a36ec499153b670d536cd066b4ea07d49241a%40group.calendar.google.com&ctz=Europe%2FLondon"
                            target="_blank" rel="noopener noreferrer">
                            <h4>Click to view in a new tab</h4>
                        </a>

                        <section className="type-a">
                            <h2>Previous Events</h2><br />
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
                        </section>
                    </div>
                </div>
            </div>

            <FooterContact />
        </>

    );
};

export default Page;