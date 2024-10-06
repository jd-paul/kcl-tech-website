import React from "react";

import Schedule from "../images/techsummit/Schedule.jpg";
import LivePicture1 from "../images/techsummit/22/15.png";

const Details: React.FC = () => {
  return (
    <div
      className="slides-generic bg-[#202020]"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        margin: 0,
      }}
    >
      <div className="content-generic" style={{ zIndex: 2 }}>
        <div className="grid md:grid-cols-7 md:grid-rows-1 gap-5 grid-cols-1">
          {/* Image div */}
          <div className="md:col-span-3 md:row-span-1">
            <img
              src={LivePicture1.src}
              alt="Strand Campus"
              className="w-full h-auto rounded-[5px]"
            />
          </div>

          {/* Text content div */}
          <div className="md:col-span-4 md:row-span-1">
            <h1 className="text-4xl md:text-6xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-[1rem]">
              When and Where?
            </h1>
            <h2 className="font-titillium text-2xl font-normal italic text-neutral-200">
              <b>Location:</b> Bush House North Wing, King's College London, 30
              Aldwych
            </h2>
            <h2 className="font-titillium text-2xl font-normal italic text-neutral-200">
              <b>Time:</b> October 19, 10:00 AM - 5:00 PM
            </h2>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl text-neutral-50 font-exo font-bold leading-[3.5rem] mt-[3rem] mb-[0.5rem]">
          TechSummit Schedule
        </h1>
        <div className="px-[15%]">
          <img
            src={Schedule.src}
            alt="Strand Campus"
            className="w-full h-auto rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
