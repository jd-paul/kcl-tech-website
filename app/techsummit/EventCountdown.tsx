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
        <div>
          <h1>Countdown to the Event</h1>
          <p>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </p>
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
