"use client";

import React, { useEffect, useState } from "react";

import NavbarBlack from "../components/NavbarBlack";
import Footer from "../components/Footer";
import About from "../components/landing/About";
import Hero from "../components/landing/Hero";
import SlidingFooter from "../components/Marquee";
import { useOpportunityContext } from "../context/oppsContext";
import { IOpportunity } from "../models/Opportunity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Page: React.FC = () => {
  const [curOpportunities, setCurOpportunities] = useState<IOpportunity[]>([]);
  const [allOpportunities, setAllOpportunities] = useState<IOpportunity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [opportunitiesPerPage] = useState(5); // Display 5 opportunities per page
  const [activeOpportunity, setActiveOpportunity] = useState<string | null>(
    null
  ); // State for accordion

  const { opportunities, opportunityLoading, opportunityError } =
    useOpportunityContext();

  useEffect(() => {
    if (opportunities) {
      const currentOpportunities = opportunities
        .filter(
          (opportunity: IOpportunity) =>
            new Date(opportunity.date) >= new Date()
        )
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      setCurOpportunities(currentOpportunities);

      const allOpportunities = opportunities
        .filter(
          (opportunity: IOpportunity) => new Date(opportunity.date) < new Date()
        )
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      setAllOpportunities(allOpportunities);
    }
  }, [opportunities]);

  // Calculate current opportunities based on the current page
  const indexOfLastOpportunity = currentPage * opportunitiesPerPage;
  const indexOfFirstOpportunity = indexOfLastOpportunity - opportunitiesPerPage;
  const currentOpportunities = allOpportunities.slice(
    indexOfFirstOpportunity,
    indexOfLastOpportunity
  );

  // Calculate total pages
  const totalPages = Math.ceil(allOpportunities.length / opportunitiesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
              Job Listings and Opportunities
            </h1>
            <p className="text-neutral-200 font-light font-titillium text-xl">
              A forum for posting and viewing job postings, internships, and
              other career-related opportunities. Postings are uploaded by
              committee and students.
            </p>
          </div>

          {/* Render current opportunities with accordion */}
          {currentOpportunities.map((opp: IOpportunity) => (
            <article key={opp._id} className="border-b border-slate-200">
              <button
                onClick={() =>
                  setActiveOpportunity(
                    activeOpportunity === opp._id ? null : opp._id
                  )
                }
                className="w-full flex justify-between items-center py-5 text-slate-800"
                aria-expanded={activeOpportunity === opp._id}
                aria-controls={opp._id}
              >
                <span>{opp.title}</span>
                <span className="text-slate-800 transition-transform duration-300">
                  <FontAwesomeIcon
                    icon={activeOpportunity === opp._id ? faMinus : faPlus}
                    className="w-4 h-4"
                  />
                </span>
              </button>
              {activeOpportunity === opp._id && (
                <div
                  id={opp._id}
                  className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div className="pb-5 text-sm text-slate-500">
                    {opp.url !== "-" && opp.url !== "" && (
                      <p>
                        Link: <Link href={!opp.url.includes("http") ? `https://${opp.url}` : opp.url} className="text-accent-color-a">{!opp.url.includes("http") ? `https://${opp.url}` : opp.url}</Link>
                      </p>
                    )}
                    <p>
                      <b>Date:</b> {opp.date}
                    </p>
                    <p>
                      <b>Bring:</b> {opp.company}
                    </p>
                    <div
                      style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                    >
                      {opp.description}
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <SlidingFooter />
    </div>
  );
};

export default Page;
