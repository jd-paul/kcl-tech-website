import React, { useState } from 'react';
import Logo from '../logos/logoicon_white.png';
import Button from './buttons/Button';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="static_nav-menu">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0 3rem',
          fontFamily: "'Titillium Web', sans-serif",
        }}
      >
        <div className="flex">
          <a className="logo" href="index.html">
            <img src={Logo} width="45px" alt="Inc Logo" />
          </a>
        </div>

        <div className="flex">
          <nav className="relative">
            <ul className="menu-bar">
              <li>
                <Button
                  type="a"
                  label={
                    <>
                      Events
                      <i className="bx bx-chevron-down" aria-hidden="true"></i>
                    </>
                  }
                  onClick={toggleDropdown}
                />
                {dropdownOpen && (
                  <div id="dropdown1" className="dropdown">
                    <ul className="dropdown-generic" role="menu">
                      <li role="menuitem">
                        <a
                          className="dropdown-link"
                          href="techsummit.html"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '30% 70%',
                          }}
                        >
                          <img
                            src="logos/TS.png"
                            width="70"
                            height="70"
                            className="icon"
                            alt="TechSummit Logo"
                          />
                          <div className="dropdown-text-container">
                            <h2>TechSummit</h2>
                            <p>THE UK'S BIGGEST STUDENT ENTREPRENEUR CAREERS FAIR</p>
                          </div>
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          className="dropdown-link"
                          href="https://www.huzzle.app/events/hacklondon-126659"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '30% 70%',
                          }}
                        >
                          <img
                            src="logos/HL.png"
                            width="70"
                            height="70"
                            className="icon"
                            alt="HackLondon Logo"
                          />
                          <div className="dropdown-text-container">
                            <h2>HackLondon</h2>
                            <p>Our biggest hackathon</p>
                          </div>
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          className="dropdown-link"
                          href="hackkings.html"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '30% 70%',
                          }}
                        >
                          <img
                            src="logos/HK.png"
                            width="70"
                            height="70"
                            className="icon"
                            alt="HackKing's Logo"
                          />
                          <div className="dropdown-text-container">
                            <h2>HackKing's</h2>
                            <p>Our signature King's only hackathon</p>
                          </div>
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          className="dropdown-link"
                          href="#creative-feed"
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '30% 70%',
                          }}
                        >
                          <img
                            src="logos/FYH.png"
                            width="70"
                            height="70"
                            className="icon"
                            alt="FirstYearHack Logo"
                          />
                          <div className="dropdown-text-container">
                            <h2>FirstYearHack</h2>
                            <p>A hackathon exclusively for 1st year students</p>
                          </div>
                        </a>
                      </li>
                      <li role="menuitem">
                        <a
                          className="dropdown-link"
                          href="events.html"
                          style={{ display: 'block', width: '100%' }}
                        >
                          <div className="dropdown-text-container">
                            <h2>More</h2>
                            <p>Techference | HacktheLion | Bootcamp | Workshops | Weekly Events</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Button type="c" label="Blog" onClick={() => window.location.href = 'blog.html'} />
              </li>
              <li>
                <Button type="c" label="Sponsors" onClick={() => window.location.href = 'sponsors.html'} />
              </li>
              <li>
                <Button type="b" label="Opportunity board" onClick={() => window.location.href = 'opportunityBoard.html'} />
              </li>
              <li>
                <Button
                  type="a"
                  label={
                    <>
                      Become a member
                    </>
                  }
                  onClick={() => window.open('https://www.kclsu.org/groups/activities/join/22559/', '_blank')}
                />
              </li>
            </ul>
          </nav>

          <button
            id="hamburger-main"
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
