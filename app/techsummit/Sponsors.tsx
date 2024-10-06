import React from "react";
import Sliding from "./Sliding";

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

const whiteSafeLogos = [
  { src: BradStarkeey, alt: "Brad Starkey" },
  { src: ZeroGravity, alt: "ZeroGravity" },
  { src: BrightNetwork, alt: "Bright Network" },
  { src: EI, alt: "EI" },
  { src: Roche, alt: "Sanjana Muppasani" },
  { src: EJF, alt: "Eleftherios Jerry Floros" },
];

const logos = [
  { src: Elycian, alt: "Elycian" },
  { src: KBC, alt: "KBC" },
  { src: Kickstart, alt: "Kickstart" },
  { src: KLabs, alt: "King's Labs" },
  { src: LeWagon, alt: "Le Wagon" },
];

const Sponsors: React.FC = () => {
  return (
    <>
      <div
        className="slides-generic bg-white"
        style={{ paddingTop: "3rem", paddingBottom: "3rem", margin: 0 }}
      >
        <div className="content-generic">
          <Sliding logos={whiteSafeLogos} />
        </div>
      </div>
      <div
        className="slides-generic bg-black"
        style={{ paddingTop: "3rem", paddingBottom: "3rem", margin: 0 }}
      >
        <div className="content-generic">
          <Sliding logos={logos} />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
