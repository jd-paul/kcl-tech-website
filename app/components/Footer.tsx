"use client";

import React, { useEffect, useState } from 'react';
import FooterContact from './FooterContact';
import { useEventContext } from '../context/eventsContext';
import { IEvent } from '../models/Event';
import { useBlogContext } from '../context/blogsContext';
import { IBlog } from '../models/Blog';
import { IOpportunity } from '../models/Opportunity';
import { useOpportunityContext } from '../context/oppsContext';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer: React.FC = () => {
    const [allEvents, setAllEvents] = useState<IEvent[]>([]);
    const [pastBlogs, setPastBlogs] = useState<IBlog[]>([]);
    const [pastOpportunities, setPastOpportunities] = useState<IOpportunity[]>([]);

    const [activeEvent, setActiveEvent] = useState<string | null>(null);
    const [activeBlog, setActiveBlog] = useState<string | null>(null);
    const [activeOpportunity, setActiveOpportunity] = useState<string | null>(null);

    const { events, eventLoading, eventError } = useEventContext();
    const { blogs, blogLoading, blogError } = useBlogContext();
    const { opportunities, opportunityLoading, opportunityError } = useOpportunityContext()

    useEffect(() => {
        if (events) {
            const allEvents = events
                .sort((a: IEvent, b: IEvent) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3); // Only take the first three past events
            setAllEvents(allEvents);
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
                            allEvents.length > 0 ? (
                                allEvents.map((event: IEvent) => (
                                    <article key={event._id} className="border-b border-slate-200">
                                        <button
                                            onClick={() =>
                                                setActiveEvent(
                                                    activeEvent === event._id ? null : event._id
                                                )
                                            }
                                            className="w-full flex justify-between items-center py-5 text-slate-800"
                                            aria-expanded={activeEvent === event._id}
                                            aria-controls={event._id}
                                        >
                                            <span>{event.title}</span>
                                            <span className="text-slate-800 transition-transform duration-300">
                                                <FontAwesomeIcon
                                                    icon={activeEvent === event._id ? faMinus : faPlus}
                                                    className="w-4 h-4"
                                                />
                                            </span>
                                        </button>
                                        {activeEvent === event._id && (
                                            <div
                                                id={event._id}
                                                className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out"
                                            >
                                                <div className="pb-5 text-sm text-slate-500">
                                                    <p>
                                                        <b>Time:</b> {event.time.start} - {event.time.end}
                                                    </p>
                                                    <p>
                                                        <b>Date:</b> {event.date}
                                                    </p>
                                                    <p>
                                                        <b>Location:</b> {event.location}
                                                    </p>
                                                    <p>
                                                        <b>Bring:</b> {event.requirements}
                                                    </p>
                                                    <div
                                                        style={{
                                                            whiteSpace: "pre-wrap",
                                                            wordWrap: "break-word",
                                                        }}
                                                    >
                                                        {event.description}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </article>
                                ))
                            ) : (
                                <p>No events available.</p>
                            )}
                    </div>

                    <hr />

                    {/* Blog Section */}
                    <div style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
                        <h1 className="text-3xl text-neutral-800 font-titillium font-bold pb-2">Latest Staff Blogs</h1>
                        {blogLoading ? <p>Loading blogs...</p> :
                            pastBlogs.length > 0 ? (
                                pastBlogs.map((blog: IBlog) => (

                                    <article
                                        key={blog.metadata.slug}
                                        className="border-b border-slate-200"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveBlog(
                                                    activeBlog === blog.metadata.slug
                                                        ? null
                                                        : blog.metadata.slug
                                                )
                                            }
                                            className="w-full flex justify-between items-center py-5 text-slate-800"
                                            aria-expanded={activeBlog === blog.metadata.slug}
                                            aria-controls={blog.metadata.slug}
                                        >
                                            <span>{blog.title}</span>
                                            <span className="text-slate-800 transition-transform duration-300">
                                                <FontAwesomeIcon
                                                    icon={
                                                        activeBlog === blog.metadata.slug ? faMinus : faPlus
                                                    }
                                                    className="w-4 h-4"
                                                />
                                            </span>
                                        </button>
                                        {activeBlog === blog.metadata.slug && (
                                            <div
                                                id={blog.metadata.slug}
                                                className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out"
                                            >
                                                <div className="pb-5 text-sm text-slate-500">
                                                    <div
                                                        style={{
                                                            whiteSpace: "pre-wrap",
                                                            wordWrap: "break-word",
                                                        }}
                                                    >
                                                        {blog.content}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </article>
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
                                <article key={opp._id} className="border-b border-slate-200">
                                    <button
                                        onClick={() =>
                                            setActiveOpportunity(
                                                activeOpportunity === opp._id ? null : opp._id
                                            )
                                        }
                                        className="w-full flex justify-between items-center py-5 text-slate-800"
                                        aria-expanded={activeOpportunity === opp._id}
                                        aria-controls={opp._id}
                                    >
                                        <span>{opp.title}</span>
                                        <span className="text-slate-800 transition-transform duration-300">
                                            <FontAwesomeIcon
                                                icon={activeOpportunity === opp._id ? faMinus : faPlus}
                                                className="w-4 h-4"
                                            />
                                        </span>
                                    </button>
                                    {activeOpportunity === opp._id && (
                                        <div
                                            id={opp._id}
                                            className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out"
                                        >
                                            <div className="pb-5 text-sm text-slate-500">
                                                {opp.url !== "-" && opp.url !== "" && (
                                                    <p>
                                                        Link: <Link href={opp.url} className="text-accent-color-a">{opp.url}</Link>
                                                    </p>
                                                )}
                                                <p>
                                                    <b>Date:</b> {data.date}
                                                </p>
                                                <p>
                                                    <b>Bring:</b> {data.company}
                                                </p>
                                                <div
                                                    style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                                                >
                                                    {data.description}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </article>
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
