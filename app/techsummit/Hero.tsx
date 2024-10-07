import React from "react";

import Navbar from "../components/Navbar";
import Button from "../components/buttons/Button";

import Robot from "../images/picture-tech-summit.jpg";
import KCLTECH from "../logos/logoicon.png";
import UCLTECH from "../images/techsummit/UCL.png";
import TECHSUMMIT from "../images/techsummit/TechSummit24.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[42rem]">
      <Navbar />
      {/* Background image */}
      <img
        src={Robot.src}
        alt="Event Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.315)" }} // Dimming the image for text clarity
      />

      {/* If md and above, display this. */}
      <div className="slides-generic h-full hidden lg:flex">
        <div className="content-generic h-full flex items-center justify-center">
          <div className="flex items-center justify-center h-full w-full">
            {/* Left Column */}
            <div className="flex-1 flex flex-col items-center">
              <div className="flex flex-col items-start">
                <h1 className="font-exo text-6xl font-black text-neutral-50">
                  <span className="text-accent-color-a">Tech</span>
                  <span className="text-accent-color-c">Summit</span> 2024
                </h1>
                <div className="pl-[0.5rem]">
                  <p className="font-titillium text-2xl font-normal italic text-neutral-200">
                    Connect with top employers like <b>Google</b>,{" "}
                    <b>Microsoft</b>, <b>Barclays</b>, and many more!
                  </p>
                </div>
                <div className="flex space-x-3 mt-[1.5rem]">
                  <div className="rounded-full border border-neutral-50 text-neutral-50 font-exo px-4 py-2 inline-flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    <div className="flex items-center">
                      <span className="font-bold">Strand, Bush House</span>
                      <span className="px-2">|</span>
                      <span>King's College London</span>
                    </div>
                  </div>
                  <div className="rounded-full border border-neutral-50 text-neutral-50 font-exo px-4 py-2 inline-flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    <b>October 19, 2024</b>
                  </div>
                </div>
                <Button
                  type="ticket"
                  label="Grab your FREE ticket!"
                  className="mt-[0.5rem]"
                  urlLink="https://www.huzzle.app/events/techsummit-2024-518616"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col items-center">
              <img
                src={TECHSUMMIT.src}
                alt="KCL Tech Logo"
                className="h-[14rem] rounded-full"
              />
              <div className="flex space-x-3 mt-[1rem]">
                <img
                  src={KCLTECH.src}
                  alt="KCL Tech Logo"
                  className="h-[4rem] rounded-full"
                />
                <img
                  src={UCLTECH.src}
                  alt="KCL Tech Logo"
                  className="h-[4rem] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If sm and below, display this. */}
      <div className="slides-generic h-full block lg:hidden">
        <div className="content-generic h-full flex items-center justify-center">
          <div className="flex items-center justify-center h-full w-full">
            <div className="flex-1 flex flex-col items-center">
              <div className="flex flex-col items-start">
                <h1 className="font-exo text-6xl font-black text-neutral-50">
                  <span className="text-accent-color-a">Tech</span>
                  <span className="text-accent-color-c">Summit</span> 2024
                </h1>
                <div className="pl-[0.5rem] mt-[1rem]">
                  <p className="font-titillium text-2xl font-normal italic text-neutral-200">
                    Connect with top employers like <b>Google</b>,{" "}
                    <b>Microsoft</b>, <b>Barclays</b>, and many more!
                  </p>
                </div>

                <div className="rounded-full border border-neutral-50 text-neutral-50 font-exo px-4 py-2 inline-flex items-center text-sm mt-[1.5rem]">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <div className="flex items-center">
                    <span className="font-bold">Strand, Bush House</span>
                    <span className="px-2">|</span>
                    <span>King's College London</span>
                  </div>
                </div>
                <div className="rounded-full border border-neutral-50 text-neutral-50 font-exo px-4 py-2 inline-flex items-center text-sm mt-[0.5rem]">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  <b>October 19, 2024</b>
                </div>

                <Button
                  type="ticket"
                  label="Grab your FREE ticket!"
                  className="mt-[0.5rem]"
                  urlLink="https://www.huzzle.app/events/techsummit-2024-518616"
                />
              </div>
              <div className="flex space-x-3 mt-[1rem]">
                <img
                  src={TECHSUMMIT.src}
                  alt="KCL Tech Logo"
                  className="h-[4rem] rounded-full"
                />
                <img
                  src={KCLTECH.src}
                  alt="KCL Tech Logo"
                  className="h-[4rem] rounded-full"
                />
                <img
                  src={UCLTECH.src}
                  alt="KCL Tech Logo"
                  className="h-[4rem] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
