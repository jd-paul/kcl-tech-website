"use client";

import React, { useState, useEffect } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

interface EventCountdownProps {
  eventDate: Date;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ eventDate }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Wait until the component has mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Renderer callback function
  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <span>Event has started!</span>;
    } else {
      return (
        <div >
          <div className="text-center">
            <h1 className="font-exo text-dark-grey font-black text-3xl">COMING SOON</h1>
            <p className="font-share-tech text-dark-grey font-light text-3xl">
              {days} days {hours} hours {minutes} minutes {seconds} seconds
            </p>
          </div>
        </div>
      );
    }
  };

  // Only render the countdown after the component has mounted
  return (
    <div className="countdown-container">
      {isMounted ? (
        <Countdown date={eventDate} renderer={renderer} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventCountdown;
