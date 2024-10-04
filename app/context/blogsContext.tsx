"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IBlog } from "../models/Blog";

interface BlogContextType {
    blogs: IBlog[] | null;
    blogLoading: boolean;
    blogError: string | null;
}

// Create the context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Create a provider component
export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [blogs, setBlogs] = useState<IBlog[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (err) {
                setError('Failed to fetch events.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <BlogContext.Provider value={{ blogs: blogs, blogLoading: loading, blogError: error }}>
            {children}
        </BlogContext.Provider>
    );
};

// Custom hook to use the EventContext
export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (context === undefined) {
        throw new Error('useBlogContext must be used within an BlogProvider');
    }
    return context;
};