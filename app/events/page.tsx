"use client";

import React, { useEffect, useState } from "react";

import NavbarBlack from "../components/NavbarBlack";
import FooterContact from "../components/FooterContact";
import SlidingFooter from "../components/Marquee";
import { IEvent } from "../models/Event";
import { useEventContext } from "../context/eventsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Page: React.FC = () => {
  const [pastEvents, setPastEvents] = useState<IEvent[]>([]);
  const [futureEvents, setFutureEvents] = useState<IEvent[]>([]);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const eventsPerPage = 5; // Number of events to display per page

  const {
    events,
    eventLoading: loading,
    eventError: error,
  } = useEventContext();

  useEffect(() => {
    if (events) {
      const pastEvents = events
        .filter((event: IEvent) => new Date(event.date) < new Date())
        .sort(
          (a: IEvent, b: IEvent) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      setPastEvents(pastEvents);

      const futureEvents = events.filter(
        (event: IEvent) => new Date(event.date) >= new Date()
      );
      setFutureEvents(futureEvents);
    }
  }, [events]);

  if (error) return <p>Error: {error}</p>;

  // Pagination Logic for Past Events
  const totalPages = Math.ceil(pastEvents.length / eventsPerPage);
  const currentEvents = pastEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

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
              KCL Tech Events
            </h1>
            <p className="text-neutral-200 font-light font-titillium text-xl">
              Upcoming and past events at KCL Tech.
            </p>
          </div>

          {/* Future Events Section */}
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {loading ? (
            <p>Loading events...</p>
          ) : futureEvents.length > 0 ? (
            futureEvents.map((event: IEvent) => (
              <article key={event._id} className="border-b border-slate-200">
                <button
                  onClick={() =>
                    setActiveEvent(activeEvent === event._id ? null : event._id)
                  }
                  className="w-full flex justify-between items-center py-5 text-slate-800"
                  aria-expanded={activeEvent === event._id}
                  aria-controls={event._id}
                >
                  <span>{event.title}</span>
                  <span className="text-slate-800 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={activeEvent === event._id ? faMinus : faPlus}
                      className="w-4 h-4"
                    />
                  </span>
                </button>
                {activeEvent === event._id && (
                  <div
                    id={event._id}
                    className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out"
                  >
                    <div className="pb-5 text-sm text-slate-500">
                      <p>
                        <b>Time:</b> {event.time.start} - {event.time.end}
                      </p>
                      <p>
                        <b>Date:</b> {event.date}
                      </p>
                      <p>
                        <b>Location:</b> {event.location}
                      </p>
                      <p>
                        <b>Bring:</b> {event.requirements}
                      </p>
                      <div
                        style={{
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word",
                        }}
                      >
                        {event.description}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))
          ) : (
            <p>No upcoming events.</p>
          )}

          {/* Pagination for Past Events */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Past Events</h2>
          {loading ? (
            <p>Loading events...</p>
          ) : pastEvents.length > 0 ? (
            <>
              {currentEvents.map((event: IEvent) => (
                <article key={event._id} className="border-b border-slate-200">
                  <button
                    onClick={() =>
                      setActiveEvent(
                        activeEvent === event._id ? null : event._id
                      )
                    }
                    className="w-full flex justify-between items-center py-5 text-slate-800"
                    aria-expanded={activeEvent === event._id}
                    aria-controls={event._id}
                  >
                    <span>{event.title}</span>
                    <span className="text-slate-800 transition-transform duration-300">
                      <FontAwesomeIcon
                        icon={activeEvent === event._id ? faMinus : faPlus}
                        className="w-4 h-4"
                      />
                    </span>
                  </button>
                  {activeEvent === event._id && (
                    <div
                      id={event._id}
                      className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out"
                    >
                      <div className="pb-5 text-sm text-slate-500">
                        <p>
                          <b>Time:</b> {event.time.start} - {event.time.end}
                        </p>
                        <p>
                          <b>Date:</b> {event.date}
                        </p>
                        <p>
                          <b>Location:</b> {event.location}
                        </p>
                        <p>
                          <b>Bring:</b> {event.requirements}
                        </p>
                        <div
                          style={{
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          }}
                        >
                          {event.description}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 bg-gray-200 text-gray-600 rounded ${currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300"
                    }`}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 bg-gray-200 text-gray-600 rounded ${currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300"
                    }`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p>No past events.</p>
          )}
        </div>
      </div>

      <FooterContact />
      <SlidingFooter />
    </div>
  );
};

export default Page;
