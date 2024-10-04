"use client";

import React from "react";
import dynamic from "next/dynamic";

import Button from "../components/buttons/Button";
import Navbar from "../components/Navbar";
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";

import AboutNew from "../components/landing/AboutNew";

import Hero from "./Hero";
import Sponsors from  "./Sponsors";

const EventCountdown = dynamic(() => import("./EventCountdown"), {
  ssr: false, // Disable server-side rendering for this component
});

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Sponsors />

    </>
  );
};

export default Page;
