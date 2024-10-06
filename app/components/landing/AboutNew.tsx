import React from "react";

import Cards from "../Cards";
import Link from "next/link";

import ImageMain from "../../images/picture-of-main.jpg";
import ImageGala from "../../images/picture-of-gala.jpeg";
import ImagePresentation from "../../images/picture-of-presentation.jpg";
import ImageTeam from "../../images/picture-of-team.jpeg";

import StaffKatya from "../../images/committee/Ekaterina Hunter - President.jpg";
import StaffWaseef from "../../images/committee/Waseef Khan - Hackathon Manager.jpeg";
import StaffPaul from "../../images/committee/Paul San Diego - Website Manager and Signature Events Media Manager.jpeg";
import StaffMin from "../../images/committee/Minseok Ryu - Head of Events.jpg";
import StaffAgrima from "../../images/committee/Agrima Khare - Programming Lead.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import BlackRock from "../../images/BLK_eng_black_rgb.png";

function About() {
  return (
    <div>
      <div className="slides-generic bg-[#202020]" style={{ paddingTop: "6rem", margin: 0 }} >
        <div className="content-generic">
          <h1 className="text-4xl md:text-5xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-1">
            We create. We are King's Technology Society.
          </h1>

          <div className="responsive-grid py-[4rem]">
            <div>
              <h4
                className="font-share-tech text-light text-white"
                style={{ color: "rgba(255, 255, 255, 0.65)" }}
              >
                // Tech vision.
              </h4>

              <p className="text-neutral-50 text-2xl md:text-3xl pr-[0.5rem] font-titillium left leading-[2.5rem]">
                We hope to empower ambitious students across London to pursue
                their technological paths.
              </p>
            </div>

            <div>
              <h4
                className="font-share-tech text-light text-white"
                style={{ color: "rgba(255, 255, 255, 0.65)" }}
              >
                // Tech mission.
              </h4>

              <p className="text-neutral-50 text-2xl md:text-3xl pr-[0.5rem] font-titillium left leading-[2.5rem]">
                We are a student-run organization at London. We host events and
                bring in industry speakers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
            <Cards
              title="KCL Tech - About Us"
              content=" Join KCL Tech Soc, where students can explore the field of computer science and take part in a vibrant community! Everyone is welcome!"
              imageUrl={ImageGala.src}
              imageAlt="About Us Image"
              buttonText="Learn More"
              buttonLink="https://www.kclsu.org/groups/activities/join/22559/"
              type="white"
            />
            <Cards
              title="KCL Tech X UCL Tech TechSummit 2024 - The UK's biggest student led career fair"
              content="TechSummit 2024 is back, bigger and better than ever! This year, KCL Tech is teaming up with UCL Tech Soc to host the UK's largest student-led careers fair."
              imageUrl={ImageTeam.src}
              imageAlt="Hackathon Image"
              buttonText="Join TechSummit 2024"
              buttonLink="https://www.huzzle.app/events/techsummit-2024-518616"
              type="white"
            />
            <Cards
              title="Weekly Workshops - KCL Tech Academy"
              content="We are very excited to bring you KCL Tech Academy! We look forward to lots of amazing workshops this year, please follow us to be updated on many exciting collaborations and bootcamps throughout the year!"
              imageUrl={ImageMain.src}
              imageAlt="Mission Image"
              buttonText="View KCL Academy"
              buttonLink="https://www.instagram.com/kcl_tech_academy/"
              type="white"
            />
          </div>
        </div>
      </div>

      <div className="custom-shape-divider-top-1722567921" style={{}}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ margin: 0 }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div
        className="parallax"
        style={{
          backgroundImage: `url(${ImageMain.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: "rgba(255, 148, 109, 0.75)",
            filter: "brightness(0.2)",
          }}
        ></div>

        <div
          className="content-generic"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "7rem",
            paddingBottom: "10rem",
          }}
        >
          <h1 className="text-4xl md:text-5xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-1">
            Our Sponsors and Speakers
          </h1>
          <div className="text-xl text-neutral-200 mb-6">
            <h2 className="font-exo font-light">
              The work that the KCL Tech Society does would not be possible
              without the support of our generous sponsors and speakers. If you
              are interested in working with us,{" "}
              <Link href="/sponsors">
                <b className="text-neutral-50 underline">please reach out</b>
              </Link>
              !
            </h2>
          </div>

          <div
            className="responsive-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))" /* Automatically adjust number of columns */,
              gridGap: "1rem" /* Gap between cells */,
              width: "100%",
            }}
          >
            {/* Card 1 */}
            <Cards
              title="Sponsor - BlackRock"
              content="BlackRock is one of the world's leading providers of investment, advisory and risk management solutions. They invest for the future on behalf of clients and local communities."
              imageUrl={BlackRock.src}
              imageAlt="BlackRock Logo"
              type="frosted"
              imageStyle={{ filter: "invert(1)" }}
            />

            {/* Card 2 */}
            <Cards
              title="Speaker - Name"
              content="Desc."
              imageUrl={BlackRock.src}
              imageAlt="BlackRock Logo"
              type="frosted"
              imageStyle={{ filter: "invert(1)" }}
            />

            {/* Card 3 */}
            <Cards
              title="Speaker - Name"
              content="Desc."
              imageUrl={BlackRock.src}
              imageAlt="BlackRock Logo"
              type="frosted"
              imageStyle={{ filter: "invert(1)" }}
            />
          </div>
        </div>

        <div
          className="custom-shape-divider-bottom-1722578256"
          style={{ zIndex: 2, padding: 0 }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
