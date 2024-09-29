"use client";

import React, { useState } from "react";
import Button from "../buttons/Button";
import Navbar from "../Navbar";

import ImageOne from "../../images/picture-of-main.jpg";
import ImageTwo from "../../images/slideshow2.jpg";
import ImageThree from "../../images/slideshow3.jpg";
import ImageFour from "../../images/slideshow4.jpg";

import Link from "next/link";

// Event data (if you only want one event)
const event = {
  title:
    "KCL X UCL brings you TechSummit 2024 - The UK's biggest student led career fair",
  description:
    "👤 25+ guest speakers 🚀 15+  tech companies 💬 5+ panel discussions",
  image: ImageThree,
  link: "https://www.kcltech.co.uk/hackkings.html",
  hex: "#FF5733",
};

const Hero = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative h-screen min-h-[42rem]">
      <Navbar />

      {/* Background image */}
      <img
        src={event.image.src}
        alt="Event Background"
        className="absolute inset-0 w-full h-full object-cover -z-1"
        style={{ filter: "brightness(0.20)" }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] text-left">
          <h1
            className="inline-block text-4xl md:text-6xl font-share-tech font-bold text-main-color bg-white bg-opacity-80 p-2 mb-2"
            style={{ letterSpacing: "-0.05em" }}
          >
            Welcome to KCL Tech
          </h1>
          <h2 className="text-xl text-neutral-200 mb-[0.75rem] font-titillium">
            King's College London's Technology Society
          </h2>
          <Button
            id="becomeMemberBtn"
            label="Become a Member"
            onClick={() =>
              window.open(
                "https://www.kclsu.org/groups/activities/join/22559/",
                "_blank"
              )
            }
            type="white"
          />
        </div>

        <div className="absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] text-right">
          <h1
            id="eventTitle"
            className="event-title text-neutral-200 text-2xl md:text-3xl font-bold"
          >
            {event.title}
          </h1>
          <h2
            id="eventDescription"
            className="event-description text-neutral-300 text-xl mt-2 mb-[0.75rem]"
          >
            {event.description}
          </h2>

          <Link href="/techsummit">
            <Button type="white" label="Check out TechSummit Here!" />
          </Link>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50"
          onClick={toggleDropdown}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg mt-16 w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <a href="index.html">
                <img src="./images/logoicon.png" width="45px" alt="Inc Logo" />
              </a>
              <button onClick={toggleDropdown} className="text-main-color">
                X
              </button>
            </div>
            <ul className="flex flex-col items-center text-md font-share-tech font-bold">
              <li className="cursor-pointer">Events Information</li>
              <li>Staff Blogs</li>
              <li>Sponsors</li>
              <li>Student Opportunity Board</li>
              <li>Become a Member</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
