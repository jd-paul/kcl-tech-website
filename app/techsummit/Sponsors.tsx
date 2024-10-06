import React, { useEffect, useRef } from 'react';

// Importing logos
import BradStarkeey from "./Logos/Brad Starkey.png";
import BrightNetwork from "./Logos/Bright Network.png";
import EI from "./Logos/EI (1).jpeg";
import EJF from "./Logos/Eleftherios Jerry Floros (1).jpeg";
import Elycian from "./Logos/Elycian (SPONSOR).jpeg";
import KBC from "./Logos/KBC.jpeg";
import Kickstart from "./Logos/Kickstart.jpeg";
import KLabs from "./Logos/King's Labs.jpeg";
import LeWagon from "./Logos/Le Wagon (SPONSOR) (2).png";
import Roche from "./Logos/Sanjana Muppasani.png";
import ZeroGravity from "./Logos/ZeroGravity.jpg";

// List of logos
const logos = [
    BradStarkeey,
    BrightNetwork,
    EI,
    EJF,
    Elycian,
    KBC,
    Kickstart,
    KLabs,
    LeWagon,
    Roche,
    ZeroGravity,
];

const Sponsors: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollDiv = scrollRef.current;
        if (!scrollDiv) return;

        const scrollWidth = scrollDiv.scrollWidth / 2; // total scrollable width
        let scrollAmount = 0;

        const scrollStep = () => {
            if (scrollAmount >= scrollWidth) {
                scrollAmount = 0; // Reset to start
            }
            scrollDiv.scrollLeft = scrollAmount;
            scrollAmount += 1; // Adjust speed here
        };

        const interval = setInterval(scrollStep, 10); // Adjust interval for speed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slides-generic bg-[#202020]" style={{ paddingTop: "3rem", paddingBottom: "3rem", margin: 0 }}>
            <div className="content-generic">
                <h1 className="text-4xl md:text-5xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-[1rem]">
                    Our Sponsors and Partners
                </h1>

                <div
                    className="flex overflow-hidden whitespace-nowrap"
                    ref={scrollRef}
                    style={{ width: "100%", position: "relative" }}
                >
                    {/* Render logos twice for seamless scrolling */}
                    <div className="flex">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="mx-2 flex-shrink-0">
                                <img src={logo.src} alt={`Sponsor Logo ${index + 1}`} className="h-32" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
