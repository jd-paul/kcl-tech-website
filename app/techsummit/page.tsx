"use client";

import React from "react";

import Hero from "./Hero";
import Sponsors from "./Sponsors";
import Benefits from "./Benefits";
import Details from "./Details";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Benefits />
      <Details />
    </>
  );
};

export default Page;
