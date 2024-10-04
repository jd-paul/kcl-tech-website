import React from 'react';

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
    return (
        <div className="slides-generic bg-[#202020]" style={{ paddingTop: "6rem", paddingBottom: "6rem", margin: 0 }}>
            <div className="content-generic">
                <h1 className="text-4xl md:text-5xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-1">
                    Our Sponsors and Partners
                </h1>

                {/* Scrolling logo effect */}
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex animate-slide">
                        {/* Render logos twice for a seamless effect */}
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 mx-4">
                                <img src={logo.src} alt={`Sponsor Logo ${index + 1}`} className="h-32" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .animate-slide {
                    animation: slide 2s linear infinite;
                }

                @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Sponsors;
