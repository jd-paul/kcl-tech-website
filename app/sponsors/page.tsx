import React from "react";

import NavbarBlack from "../components/NavbarBlack";

import Image from "next/image";

import BlackRock from "../images/BLK_eng_black_rgb.png";
import LeWagon from "../techsummit/Logos/Le Wagon (SPONSOR) (2).png";
import FinTech from "../techsummit/Logos/FinTech Bites (SPONSOR).jpeg";

const Page: React.FC = () => {
  const data = {
    title: "Event Title",
    start: "10:00 AM",
    finish: "12:00 PM",
    date: "2023-10-01",
    location: "Event Location",
    bring: "Laptop, charger, and enthusiasm!",
    description: "Event description goes here.",
  };

  return (
    <div>
      <NavbarBlack />
      <div
        className="slides-generic_light"
        style={{ backgroundColor: "#ffffff", paddingTop: "2rem" }}
      >

        <div className="content-generic">
          <div className="w-full p-4 bg-[#202020] mb-[1rem]">
            <h1 className="text-3xl text-neutral-50 font-exo font-bold">
              Become a Sponsor
            </h1>
            <p className="text-neutral-200 font-light font-titillium text-xl">
              Contact us to become a sponsor at{" "}
              <a href="mailto:partnerships@kcltech.co.uk">
                <span className="font-bold">
                  <u>partnerships@kcltech.co.uk</u>
                </span>
              </a>
              .
            </p>
          </div>
          <h1 className="text-3xl text-neutral-900 font-exo font-bold leading-[3.5rem] mt-1 mb-1">
            Our Sponsors
          </h1>

          <Image src={LeWagon} alt="Le Wagon Logo" width={300} height={100} className="pt-1" />
          <h1 className="text-2xl text-neutral-900 font-exo font-bold pt-1">
            Le Wagon
          </h1>
          <p>
            Learn more about our sponsor at{" "}
            <a href="https://www.lewagon.com/london">
              <b>
                <u>https://www.lewagon.com/london</u>
              </b>
            </a>
            .
          </p>

          <br />

          <Image src={FinTech} alt="FinTech Bites Logo" width={100} height={100} className="pt-1" />
          <h1 className="text-2xl text-neutral-900 font-exo font-bold pt-1">
            FinTech Bites
          </h1>
          <p>
            Learn more about our sponsor at{" "}
            <a href="https://www.fintechbites.com/">
              <b>
                <u>https://www.fintechbites.com/</u>
              </b>
            </a>
            .
          </p>

          <br />

          <h1 className="text-3xl text-neutral-900 font-exo font-bold leading-[3.5rem] mt-1 mb-1">
            Our Previous Sponsors
          </h1>

          <Image
            src={BlackRock}
            alt="BlackRock Logo"
            width={300}
            height={100}
            className="pt-1" />
          <h1 className="text-2xl text-neutral-900 font-exo font-bold pt-1">
            BlackRock
          </h1>
          <p>
            Learn more about our sponsor at{" "}
            <a href="https://www.blackrock.com/uk">
              <b>
                <u>https://www.blackrock.com/uk</u>
              </b>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
