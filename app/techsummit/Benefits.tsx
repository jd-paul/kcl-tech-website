import React from "react";

import Background3 from "../images/techsummit/background1.png";
import Background4 from "../images/techsummit/background6.png";
import Object1 from "../images/techsummit/background5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/buttons/Button";

const Hero: React.FC = () => {
  return (
    <>
      <div
        className="parallax"
        style={{
          backgroundImage: `url(${Background3.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          }}
        ></div>
        <div
          className="slides-generic"
          style={{
            paddingTop: "7rem",
            paddingBottom: "3rem",
            margin: 0,
            backgroundColor: "transparent",
          }}
        >
          <div className="content-generic" style={{ zIndex: 2 }}>
            <div className="grid md:grid-cols-7 md:grid-rows-1 gap-5 grid-cols-1">
              {/* First div - Text content */}
              <div className="md:col-span-4 md:row-span-1">
                <h1 className="text-4xl md:text-6xl text-neutral-50 font-exo font-bold md:leading-[3.5rem] mb-[1rem]">
                  Is TechSummit for You?
                </h1>
                <h1 className="text-3xl md:text-3xl text-neutral-100 font-titillium font-bold md:leading-[3.5rem] mb-[1rem]">
                  TechSummit is one of our most anticipated events. It is a
                  unique blend of career opportunities and engaging workshops.
                </h1>
                <ul className="pl-[0.5rem]">
                  <li className="font-titillium text-2xl font-normal italic text-neutral-200">
                    • 2000+ talented attendees from the best UK universities
                  </li>
                  <li className="font-titillium text-2xl font-normal italic text-neutral-200">
                    • 15+ tech companies looking to hire top talent
                  </li>
                  <li className="font-titillium text-2xl font-normal italic text-neutral-200">
                    • 5+ panel discussions to help you land your dream job
                  </li>
                </ul>
              </div>

              {/* Second div - Image */}
              <div className="md:col-span-3 md:row-span-1">
                <img src={Object1.src} alt="Background 4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[5rem]">
              <div className="bg-transparent p-4 text-white text-center ">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-[8rem] mb-[1rem] text-neutral-50"
                />
                <h2 className="text-3xl font-exo font-bold mb-2 text-neutral-200">
                  <span className="">15+</span> hottest tech companies
                </h2>
              </div>
              <div className="bg-transparent p-4 text-white text-center ">
                <FontAwesomeIcon
                  icon={faCommentsDollar}
                  className="text-[8rem] mb-[1rem] text-neutral-50"
                />
                <h2 className="text-3xl font-exo font-bold mb-2 text-neutral-200">
                  <span className="">5+</span> panel workshops and networking
                </h2>
              </div>
              <div className="bg-transparent p-4 text-white text-center ">
                <FontAwesomeIcon
                  icon={faMicrophoneLines}
                  className="text-[8rem] mb-[1rem] text-neutral-50"
                />
                <h2 className="text-3xl font-exo font-bold mb-2 text-neutral-200">
                  <span className="">20+</span> speakers looking to hire fresh
                  talent
                </h2>
              </div>
            </div>

            <div
              className="p-4 text-white text-center mt-[0.75rem]"
              style={{
                backgroundImage: `url(${Background4.src})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faTicket}
                className="text-[8rem] mb-[1rem] text-neutral-50"
              />
              <h2 className="text-3xl font-exo font-black mb-2 text-neutral-50">
                Get your free ticket now!
              </h2>
              <Button
                type="ticket"
                label="Grab your FREE ticket!"
                className="mt-[0.5rem]"
                urlLink="https://www.huzzle.app/events/techsummit-2024-518616"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
