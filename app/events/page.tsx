"use client";

import React, { useEffect, useState } from 'react';

import NavbarBlack from '../components/NavbarBlack';
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";
import { IEvent } from '../models/Event';
import { useEventContext } from '../context/eventsContext';

// Import FontAwesomeIcon and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Page: React.FC = () => {
    const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
    const [futureEvents, setFutureEvents] = useState<IEvent[]>([]);
    const [activeEvent, setActiveEvent] = useState<string | null>(null);

    const { events, eventLoading: loading, eventError: error } = useEventContext();

    useEffect(() => {
        if (events) {
            const pastEvents = events
                .filter((event: IEvent) => new Date(event.date) < new Date())
                .sort((a: IEvent, b: IEvent) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setPastEvents(pastEvents);

            const futureEvents = events.filter((event: IEvent) => new Date(event.date) >= new Date());
            setFutureEvents(futureEvents);
        }
    }, [events]);

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <NavbarBlack />
            <div className="slides-generic_light" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
                <div className="w-full p-4 bg-[#202020] mb-[1rem]">
                    <h1 className="text-3xl text-neutral-50 font-exo font-bold">KCL Tech Events</h1>
                    <p className="text-neutral-200 font-light font-titillium text-xl">
                        Upcoming and past events at KCL Tech.
                    </p>
                </div>
                <div className="content-generic">


                    {/* Future Events with Accordion and Signup */}
                    <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                    {loading ? <p>Loading events...</p> : futureEvents.length > 0 ? (
                        futureEvents.map((event: IEvent) => (
                            <article key={event.id} className="border-b border-slate-200">
                                <button
                                    onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                                    className="w-full flex justify-between items-center py-5 text-slate-800"
                                    aria-expanded={activeEvent === event.id}
                                    aria-controls={event.id}
                                >
                                    <span>{event.title}</span>
                                    <span className="text-slate-800 transition-transform duration-300">
                                        <FontAwesomeIcon icon={activeEvent === event.id ? faMinus : faPlus} className="w-4 h-4" />
                                    </span>
                                </button>
                                {activeEvent === event.id && (
                                    <div id={event.id} className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                                        <div className="pb-5 text-sm text-slate-500">
                                            <p><b>Time:</b> {event.start_time} - {event.end_time}</p>
                                            <p><b>Date:</b> {event.date}</p>
                                            <p><b>Location:</b> {event.location}</p>
                                            <p><b>Bring:</b> {event.requirements}</p>
                                            <p>{event.description}</p>
                                            {/* Signup button */}
                                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                                Sign up for this event
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))
                    ) : (
                        <p>No upcoming events.</p>
                    )}

                    {/* Google Calendar Embed */}
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Europe%2FLondon&title&src=ZmEwZTE2MzVkNWVlZjkyYWFmZDc4ZjgzZDg3YTM2ZWM0OTkxNTNiNjcwZDUzNmNkMDY2YjRlYTA3ZDQ5MjQxYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26"
                        style={{ border: 'solid 1px #777', marginTop: '1rem' }} width="100%" height="600" frameBorder="0"
                        scrolling="no"></iframe>
                    <br />
                    <a
                        href="https://calendar.google.com/calendar/ical/fa0e1635d5eef92aafd78f83d87a36ec499153b670d536cd066b4ea07d49241a%40group.calendar.google.com/public/basic.ics">
                        <h4>Subscribe (Click to add to your calendar)</h4>
                    </a>

                    {/* Past Events with Accordion */}
                    <h2 className="text-2xl font-bold mt-8 mb-4">Past Events</h2>
                    {loading ? <p>Loading events...</p> : pastEvents.length > 0 ? (
                        pastEvents.map((event: IEvent) => (
                            <article key={event._id} className="border-b border-slate-200">
                                <button
                                    onClick={() => setActiveEvent(activeEvent === event._id ? null : event._id)}
                                    className="w-full flex justify-between items-center py-5 text-slate-800"
                                    aria-expanded={activeEvent === event._id}
                                    aria-controls={event._id}
                                >
                                    <span>{event.title}</span>
                                    <span className="text-slate-800 transition-transform duration-300">
                                        <FontAwesomeIcon icon={activeEvent === event._id ? faMinus : faPlus} className="w-4 h-4" />
                                    </span>
                                </button>
                                {activeEvent === event._id && (
                                    <div id={event._id} className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                                        <div className="pb-5 text-sm text-slate-500">
                                            <p><b>Time:</b> {event.start_time} - {event.end_time}</p>
                                            <p><b>Date:</b> {event.date}</p>
                                            <p><b>Location:</b> {event.location}</p>
                                            <p><b>Bring:</b> {event.requirements}</p>
                                            <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                                                {event.description}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </article>
                        ))
                    ) : (
                        <p>No past events.</p>
                    )}
                </div>
            </div>

            <FooterContact />
            <SlidingFooter />
        </div>
    );
};

export default Page;
