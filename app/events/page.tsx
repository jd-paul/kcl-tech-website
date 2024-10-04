"use client";

import React, { useEffect, useState } from 'react';

import NavbarBlack from '../components/NavbarBlack';
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";
import { IEvent } from '../models/Event';
import { useEventContext } from '../context/eventsContext';

const Page: React.FC = () => {
    const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
    const [futureEvents, setFutureEvents] = useState<IEvent[]>([]);

    const { events, eventLoading: loading, eventError: error } = useEventContext();

    // Ensure events are loaded before proceeding
    useEffect(() => {
        if (events) {
            const pastEvents = events
                .filter((event: IEvent) => new Date(event.date) < new Date())
                .sort((a: IEvent, b: IEvent) => new Date(b.date).getTime() - new Date(a.date).getTime());
            console.log(pastEvents);
            setPastEvents(pastEvents);

            const futureEvents = events.filter((event: IEvent) => new Date(event.date) >= new Date());
            setFutureEvents(futureEvents);
        }
    }, [events]); // Add 'events' as a dependency here to ensure the hook runs correctly


    if (error) return <p>Error: {error}</p>;

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
                        <div className="w-full p-4 bg-[#202020] mb-[1rem]">
                            <h1 className="text-3xl text-neutral-50 font-exo font-bold">KCL Tech Events</h1>
                            <p className="text-neutral-200 font-light font-titillium text-xl">
                                All upcoming events at KCL Tech and the full history of past events hosted at KCL Tech, highlighting everything done so far.
                            </p>
                        </div>

                        {loading ? <p>Loading events...</p> : futureEvents.length > 0 && futureEvents.map((event: IEvent) => (
                            <button key={event.id} className='accordion'>
                                <a style={{ textDecoration: 'none' }} href="#">
                                    <h2><b>{event.title}</b></h2>
                                </a>
                                <p>
                                    <b>Time:</b> {event.start_time} - {event.end_time} <b>Date:</b> {event.date} <b>Location:</b> {event.location} <b>Bring:</b> {event.requirements}
                                </p>
                            </button>
                        ))}

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

                        <h1 className="text-3xl text-neutral-900 font-exo font-bold leading-[3.5rem] mt-1 mb-1">
                            Past Events
                        </h1>
                        {loading ? <p>Loading events...</p> : pastEvents.length > 0 && pastEvents.map((event: IEvent) => (
                            <button key={event.id} className='accordion'>
                                <a style={{ textDecoration: 'none' }} href="#">
                                    <h2><b>{event.title}</b></h2>
                                </a>
                                <p>
                                    <b>Time:</b> {event.start_time} - {event.end_time} <b>Date:</b> {event.date} <b>Location:</b> {event.location} <b>Bring:</b> {event.requirements}
                                </p>
                            </button>
                        ))}

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

            <FooterContact />
        </>
    );
};

export default Page;
