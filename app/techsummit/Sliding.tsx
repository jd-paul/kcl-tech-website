import React, { useEffect, useRef } from "react";
import { StaticImageData } from "next/image"; // Import StaticImageData

interface SponsorsProps {
  logos: { src: string | StaticImageData; alt?: string }[];
}

const Sliding: React.FC<SponsorsProps> = ({ logos }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    if (!scrollDiv) return;

    const scrollWidth = scrollDiv.scrollWidth / 2;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0;
      }
      scrollDiv.scrollLeft = scrollAmount;
      scrollAmount += 1;
    };

    const interval = setInterval(scrollStep, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-hidden whitespace-nowrap" ref={scrollRef}>
      <div className="flex">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-2 flex-shrink-0">
            <img
              src={typeof logo.src === "string" ? logo.src : logo.src.src} // handle StaticImageData
              alt={logo.alt || `Sponsor Logo ${index + 1}`}
              className="h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliding;
