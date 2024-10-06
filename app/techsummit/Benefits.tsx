import React from "react";

import Background1 from "../images/picture-background1.jpg";
import Background2 from "../images/picture-background2.jpg";
import Background3 from "../images/techsummit/background1.png";
import Background4 from "../images/techsummit/background6.png";
import Object1 from "../images/techsummit/background5.png";
import Strand from "../images/techsummit/strand1.jpg";

import LivePicture1 from "../images/techsummit/22/15.png";

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
            <div className="grid grid-cols-7 grid-rows-1 gap-5">
              <div className="col-span-4 row-span-1">
                {" "}
                {/* div1 occupies columns 1 to 3 */}
                <h1 className="text-4xl md:text-6xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-[1rem]">
                  Boost your career in one day
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
              <div className="col-span-3 row-span-1">
                <img src={Object1.src} alt="Background 4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[5rem]">
              <div className="bg-accent-color-c p-4 text-white text-center ">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-[8rem] mb-[1rem] text-dark-grey"
                />
                <h2 className="text-3xl font-exo font-bold mb-2 text-dark-grey">
                  <span className="">15+</span> hottest tech companies
                </h2>
              </div>
              <div className="bg-accent-color-a p-4 text-white text-center">
                <FontAwesomeIcon
                  icon={faCommentsDollar}
                  className="text-[8rem] mb-[1rem] text-dark-grey"
                />
                <h2 className="text-3xl font-exo font-bold mb-2 text-dark-grey">
                  <span className="">5+</span> panel workshops and networking
                </h2>
              </div>
              <div className="bg-accent-color-c p-4 text-white text-center">
                <FontAwesomeIcon
                  icon={faMicrophoneLines}
                  className="text-[8rem] mb-[1rem] text-dark-grey"
                />
                <h2 className="text-3xl font-exo font-bold mb-2 text-dark-grey">
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
              />
            </div>

            <div className="grid grid-cols-7 grid-rows-1 gap-5 mt-[5rem]">
              <div className="col-span-3 row-span-1">
                {/* <img src={Object1.src} alt="Background 4" /> */}
                <img
                  src={LivePicture1.src}
                  alt="Strand Campus"
                  className="w-full h-auto rounded-[5px]"
                />
              </div>
              <div className="col-span-4 row-span-1">
                <h1 className="text-4xl md:text-6xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-[1rem]">
                  When and Where?
                </h1>
                <h2 className="font-titillium text-2xl font-normal italic text-neutral-200">
                  <b>Location:</b> Bush House North Wing, King's College London,
                  30 Aldwych
                </h2>
                <h2 className="font-titillium text-2xl font-normal italic text-neutral-200">
                  <b>Time:</b> October 19, 10:00 AM - 5:00 PM
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
