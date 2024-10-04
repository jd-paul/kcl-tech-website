"use client";

import React, { useEffect, useState } from 'react';

import NavbarBlack from '../components/NavbarBlack';
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";
import { useBlogContext } from '../context/blogsContext';
import { IBlog } from '../models/Blog';

// Import FontAwesomeIcon and the specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Page: React.FC = () => {
    const [pastBlogs, setPastBlogs] = useState<IBlog[]>([]);
    const [activeBlog, setActiveBlog] = useState<string | null>(null);

    const { blogs, blogLoading, blogError } = useBlogContext();

    useEffect(() => {
        if (blogs) {
            const pastBlogs = blogs
                .filter((blog: IBlog) => new Date(blog.publish_date) < new Date())
                .sort((a: IBlog, b: IBlog) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
            setPastBlogs(pastBlogs);
        }
    }, [blogs]);

    return (
        <div>
            <NavbarBlack />
            <div className="slides-generic_light" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
                <div className="w-full p-4 bg-[#202020] mb-[1rem]">
                    <h1 className="text-3xl text-neutral-50 font-exo font-bold">KCL Tech Staff Blogs</h1>
                    <p className="text-neutral-200 font-light font-titillium text-xl">
                        Assortment of blogs written by committee members. Perspectives on topics related to the society's goals, events, and initiatives.
                    </p>
                </div>
                <div className="content-generic">
                    {blogLoading ? (
                        <p>Loading blogs...</p>
                    ) : pastBlogs.length > 0 ? (
                        pastBlogs.map((blog: IBlog) => (
                            <article key={blog.metadata.slug} className="border-b border-slate-200">
                                <button
                                    onClick={() => setActiveBlog(activeBlog === blog.metadata.slug ? null : blog.metadata.slug)}
                                    className="w-full flex justify-between items-center py-5 text-slate-800"
                                    aria-expanded={activeBlog === blog.metadata.slug}
                                    aria-controls={blog.metadata.slug}
                                >
                                    <span>{blog.title}</span>
                                    <span className="text-slate-800 transition-transform duration-300">
                                        <FontAwesomeIcon icon={activeBlog === blog.metadata.slug ? faMinus : faPlus} className="w-4 h-4" />
                                    </span>
                                </button>
                                {activeBlog === blog.metadata.slug && (
                                    <div id={blog.metadata.slug} className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                                        <div className="pb-5 text-sm text-slate-500">
                                            <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                                                {blog.content}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </article>
                        ))
                    ) : (
                        <p>No blogs available at the moment.</p>
                    )}
                </div>
            </div>
            <FooterContact />
            <SlidingFooter />
        </div>
    );
};

export default Page;
