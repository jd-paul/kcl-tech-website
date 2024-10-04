"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IOpportunity } from "../models/Opportunity";

interface OpportunityContextType {
    opportunities: IOpportunity[] | null;
    opportunityLoading: boolean;
    opportunityError: string | null;
}

// Create the context
const OpportunityContext = createContext<OpportunityContextType | undefined>(undefined);

// Create a provider component
export const OpportunityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [opportunities, setOpportunities] = useState<IOpportunity[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                const data = await response.json();
                setOpportunities(data);
            } catch (err) {
                setError('Failed to fetch events.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <OpportunityContext.Provider value={{ opportunities, opportunityLoading: loading, opportunityError: error }}>
            {children}
        </OpportunityContext.Provider>
    );
};

// Custom hook to use the EventContext
export const useOpportunityContext = () => {
    const context = useContext(OpportunityContext);
    if (context === undefined) {
        throw new Error('useOpportunityContext must be used within an EventProvider');
    }
    return context;
};