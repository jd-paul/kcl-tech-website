import React, { useState } from "react";

const Navbar = () => {
  return (
    <header
      id="nav-menu"
      aria-label="navigation bar"
      className="nav-menu hidden"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: "2rem",
          height: "100%",
          padding: "0 3rem",
          fontFamily: "'Titillium Web', sans-serif",
        }}
      >
        <div className="nav-start" style={{ padding: 0 }}>
          <a className="logo" href="index.html">
            <img src="images/logoicon_white.png" height="45" alt="Inc Logo" />
          </a>
        </div>

        <div className="nav-end">
          <div className="right-container">
            <nav className="menu" style={{ position: "relative" }}>
              <ul className="menu-bar">
                <li>
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="fancy-button_c" href="sponsers.html">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a className="fancy-button_b" href="opportunityBoard.html">
                    Opportunity board
                  </a>
                </li>
                <li>
                  <a
                    className="fancy-button_a"
                    href="https://www.kclsu.org/groups/activities/join/22559/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Become a member
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <button
            id="hamburger"
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
