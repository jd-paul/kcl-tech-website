"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IEvent } from "../models/Event";

interface EventContextType {
    events: IEvent[] | null;
    eventLoading: boolean;
    eventError: string | null;
}

// Create the context
const EventContext = createContext<EventContextType | undefined>(undefined);

// Create a provider component
export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [events, setEvents] = useState<IEvent[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                const data = await response.json();
                setEvents(data);
            } catch (err) {
                setError('Failed to fetch events.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <EventContext.Provider value={{ events, eventLoading: loading, eventError: error }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use the EventContext
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (context === undefined) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};