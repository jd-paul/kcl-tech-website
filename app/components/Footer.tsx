"use client";

import React, { useEffect, useState } from 'react';
import FooterContact from './FooterContact';
import { useEventContext } from '../context/eventsContext';
import { IEvent } from '../models/Event';
import { useBlogContext } from '../context/blogsContext';
import { IBlog } from '../models/Blog';
import { IOpportunity } from '../models/Opportunity';
import { useOpportunityContext } from '../context/oppsContext';

const Footer: React.FC = () => {
    const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
    const [pastBlogs, setPastBlogs] = useState<IBlog[]>([]);
    const [pastOpportunities, setPastOpportunities] = useState<IOpportunity[]>([]);

    const { events, eventLoading, eventError } = useEventContext();
    const { blogs, blogLoading, blogError } = useBlogContext();
    const { opportunities, opportunityLoading, opportunityError } = useOpportunityContext()

    useEffect(() => {
        if (events) {
            const pastEvents = events
                .filter((event: IEvent) => new Date(event.date) < new Date())
                .sort((a: IEvent, b: IEvent) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3); // Only take the first three events
            setPastEvents(pastEvents);
        }

        if (blogs) {
            const pastBlogs = blogs
                .filter((blog: IBlog) => new Date(blog.publish_date) < new Date())
                .sort((a: IBlog, b: IBlog) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime())
                .slice(0, 3); // Only take the first three blogs
            setPastBlogs(pastBlogs);
        }

        if (opportunities) {
            const pastOpportunities = opportunities
                .filter((opp: IOpportunity) => new Date(opp.date) < new Date())
                .sort((a: IOpportunity, b: IOpportunity) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3); // Only take the first three blogs
            setPastOpportunities(pastOpportunities);
        }
    }, [events, blogs, opportunities]); // Adding 'events' as a dependency ensures the useEffect runs when 'events' changes


    if (eventError) return <p>Error: {eventError}</p>;

    const data = {
        title: "Sample Event",
        start: "10:00 AM",
        finish: "12:00 PM",
        date: "2024-01-01",
        location: "King's College London",
        bring: "Laptop",
        description: "This is a sample event description.",
        author: "John Doe",
        url: "https://example.com",
        company: "Example Company",
        deadline: "2024-01-15"
    };

    return (
        <>
            <div className="slides-generic_light" style={{ backgroundColor: 'white' }}>
                <div className="content-generic">
                    {/* Events Section */}
                    <div style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
                        <h1 className="text-3xl text-neutral-800 font-titillium font-bold pb-2">Our Events</h1>
                        {eventLoading ? <p>Loading events...</p> :
                            pastEvents.length > 0 ? (
                                pastEvents.map((event: IEvent) => (
                                    <div key={event.id}>
                                        <button className='accordion'>
                                            <a style={{ textDecoration: 'none' }} href="#">
                                                <h2 className="text-lg"><b>{event.title}</b></h2>
                                            </a>
                                            <p>
                                                <b>Time:</b> {event.start_time} - {event.end_time}{" "}
                                                <b>Date:</b> {event.date}{" "}
                                                <b>Location:</b> {event.location}{" "}
                                                <b>Bring:</b> {event.requirements}
                                            </p>
                                        </button>
                                        <div className='panel' style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                                            <p>{event.description}</p>
                                            <img src='./uploads2/image.png' height='500' className='center' alt="Event" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No upcoming events.</p>
                            )}
                    </div>

                    <hr />

                    {/* Blog Section */}
                    <div style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
                        <h1 className="text-3xl text-neutral-800 font-titillium font-bold pb-2">Latest Staff Blogs</h1>
                        {blogLoading ? <p>Loading blogs...</p> :
                            pastBlogs.length > 0 ? (
                                pastBlogs.map((blog: IBlog) => (
                                    <div key={blog.id}>
                                        <button className='accordion'>
                                            <a style={{ textDecoration: 'none' }} href="#">
                                                <h2 className="text-lg"><b>{blog.title}</b></h2>
                                            </a>
                                            <p>
                                                <b>Author:</b> {blog.organization}<br />
                                                <b>Date:</b> {blog.publish_date}
                                            </p>
                                        </button>
                                        <div className='panel' style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                                            <p>{blog.content}</p>
                                            <img src='./uploads2/image.png' height='500' className='center' alt="Blog" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No blogs available.</p>
                            )}

                    </div>

                    <hr />

                    {/* Opportunities Section */}
                    <div style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
                        <h1 className="text-3xl text-neutral-800 font-titillium font-bold pb-2">KCL Tech Opportunities</h1>
                        {opportunityLoading ? <p>Loading opportunities...</p> : pastOpportunities.length > 0 ? (
                            pastOpportunities.map((opp: IOpportunity) => (
                                <>
                                    <button className='accordion'>
                                        <a href={opp.url} target='_blank' rel='noopener noreferrer'>
                                            <h2 className="text-lg"><b>{opp.title}</b></h2>
                                        </a>
                                        <p>Application Deadline: {opp.date}</p>
                                    </button>
                                    <div className='panel' style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                                        <p>{opp.description}</p>
                                    </div>
                                </>
                            ))
                        ) : (
                            <p>No blogs available.</p>
                        )}

                    </div>

                </div>
            </div>

            {/* Footer Contact */}
            <FooterContact />
        </>
    );
};

export default Footer;
