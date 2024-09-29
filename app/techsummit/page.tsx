"use client";

import React from "react";
import dynamic from "next/dynamic";

import Robot from "../images/picture-tech-summit.jpg";

import Button from "../components/buttons/Button";
import Navbar from "../components/Navbar";
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";

import AboutNew from "../components/landing/AboutNew";

const EventCountdown = dynamic(() => import("./EventCountdown"), {
  ssr: false, // Disable server-side rendering for this component
});

const Page: React.FC = () => {
  const eventDate = new Date("2024-10-19T10:00:00");

  return (
    <div className="relative h-screen min-h-[42rem]">
      <Navbar />
      {/* Background image */}
      <img
        src={Robot.src}
        alt="Event Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.20)" }} // Dimming the image for text clarity
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Top section */}
        <div className="absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] text-left">
          <h1 className="font-playfair text-8xl font-black text-neutral-100">
            TechSummit
          </h1>
          <p className="font-playfair text-5xl font-normal italic text-accent-color-a">
            UCL x KCL Tech
          </p>
        </div>

        {/* Bottom section */}
        <div className="absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] text-right">
          <h1>TechSummit 2024</h1>
          {/* Pass the eventDate as a prop to the countdown */}
          <EventCountdown eventDate={eventDate} />
        </div>
      </div>
    </div>
  );
};

export default Page;
