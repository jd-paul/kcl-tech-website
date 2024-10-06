"use client";

import React from "react";

import Hero from "./Hero";
import Sponsors from  "./Sponsors";
import Benefits from "./Benefits";



const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Benefits />
    </>
  );
};

export default Page;
