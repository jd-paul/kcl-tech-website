"use client";

import React, { useState } from "react";
import Logo from "../logos/logoicon_white.png";
import LogoBlue from "../logos/logoicon.png";
import Button from "./buttons/Button";
import ButtonFancy from "./buttons/ButtonFancy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header
      className="absolute w-full flex items-center justify-center pt-8"
      style={{ zIndex: 100 }}
    >
      <div className="flex w-full justify-between">
        <nav className="flex items-center ml-12 md:ml-16">
          <Link href="/">
            <img src={Logo.src} alt="Logo" className="logo h-[45px]" />
          </Link>
        </nav>

        <nav className="flex items-center mr-12 md:mr-16">
          {/* Shown above md (768px) */}
          <ul className="md:flex hidden space-x-1.5">
            <li>
              <Link href="/events">
                <Button type="black2" label="Events" />
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <Button type="black2" label="Blog" />
              </Link>
            </li>
            <li>
              <Link href="/sponsors">
                <Button type="purple" label="Sponsors" />
              </Link>
            </li>
            <li>
              <Link href="/opportunity">
                <Button type="orange" label="Opportunity Board" />
              </Link>
            </li>
            <li>
              <Button
                type="blue"
                label={"Become a Member"}
                onClick={() =>
                  window.open(
                    "https://www.kclsu.org/groups/activities/join/22559/",
                    "_blank"
                  )
                }
              />
            </li>
          </ul>

          {/* Shown below md (768px) */}
          <div className="md:hidden flex">
            <FontAwesomeIcon
              className="text-white h-[44.18px] cursor-pointer logo"
              icon={faSquareMinus}
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div id="mobile-dropdown" className="dropdown">
                <ul className="dropdown-generic" role="menu">
                  {/* To be added */}
                </ul>
              </div>
            )}
          </div>
          {dropdownOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                zIndex: 1000,
                transition: "transform 0.3s ease-in-out",
                transform: dropdownOpen ? "translateY(0)" : "translateY(-100%)",
              }}
              onClick={toggleDropdown}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  paddingTop: "4rem",
                  paddingBottom: "4rem",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  width: "100%",
                  maxHeight: "100%",
                  overflowY: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Add logo and menu in the upper right */}
                <div className="flex top-3 left-3 absolute">
                  <a className="logo" href="index.html">
                    <img src={LogoBlue.src} width="45px" alt="Inc Logo" />
                  </a>
                </div>

                <div className="flex top-3 right-3 absolute">
                  <FontAwesomeIcon
                    className="text-main-color h-[44.18px] cursor-pointer logo"
                    icon={faSquareXmark}
                    onClick={toggleDropdown}
                  />
                </div>

                <ul className="md:hidden flex flex-col items-center text-md font-share-tech font-bold">
                  <li className="cursor-pointer">Events Information</li>
                  <li>Staff Blogs</li>
                  <li>Sponsors</li>
                  <li>Student Opportunity Board</li>
                  <li>Become a Member</li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
