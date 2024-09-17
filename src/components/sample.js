<div className="flex ml-4">
          <a className="logo" href="index.html">
            <img src={Logo} width="45px" alt="Inc Logo" />
          </a>
        </div>

        {/* Below md (768px) size, these should not be present. Instead, a menu button should appear on the right. */}
        <div className="flex mr-4">
          <nav className="relative">
            {/* Shown above md (768px) */}
            <ul className="md:flex hidden"> {/* Hidden below md (768px) */}
              <li>
              <Button type="white" label="Events" onClick={() => window.location.href = 'events.html'} />
              </li>
              <li>
                <Button type="white" label="Blog" onClick={() => window.location.href = 'blog.html'} />
              </li>
              <li>
                <Button type="purple" label="Sponsors" onClick={() => window.location.href = 'sponsors.html'} />
              </li>
              <li>
                <Button type="orange" label="Opportunity board" onClick={() => window.location.href = 'opportunityBoard.html'} />
              </li>
              <li>
                <Button
                  type="blue"
                  label={
                    <>
                      Become a member
                    </>
                  }
                  onClick={() => window.open('https://www.kclsu.org/groups/activities/join/22559/', '_blank')}
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
          </nav>
        </div>





// {dropdownOpen && (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.75)',
//         zIndex: 1000,
//         transition: 'transform 0.3s ease-in-out',
//         transform: dropdownOpen ? 'translateY(0)' : 'translateY(-100%)',
//       }}
//       onClick={toggleDropdown}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           backgroundColor: 'white',
//           paddingTop: '4rem',
//           paddingBottom: '4rem',
//           borderBottomLeftRadius: '4px',
//           borderBottomRightRadius: '4px',
//           width: '100%',
//           maxHeight: '100%',
//           overflowY: 'auto',
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Add logo and menu in the upper right */}
//         <div className="flex top-3 left-3 absolute">
//           <a className="logo" href="index.html">
//             <img src={LogoBlue} width="45px" alt="Inc Logo" />
//           </a>
//         </div>

//         <div className="flex top-3 right-3 absolute">
//           <FontAwesomeIcon
//             className="text-main-color h-[44.18px] cursor-pointer logo"
//             icon={faSquareXmark}
//             onClick={toggleDropdown}
//           />
//         </div>


//         <ul className="md:hidden flex flex-col items-center text-md font-share-tech font-bold">
//           <li className="cursor-pointer">Events Information</li>
//           <li>Staff Blogs</li>
//           <li>Sponsors</li>
//           <li>Student Opportunity Board</li>
//           <li>Become a Member</li>
//         </ul>
//       </div>
//     </div>
//   )}


const events = [
    {
      title: "HackKing's",
      description: "200 Students | 12+ Hours | Amazing Prizes | Free Food | September 24, 2024",
      image: "./images/main-pic.JPG",
      link: "https://www.kcltech.co.uk/hackkings.html",
      hex: "#FF5733"
    },
    {
      title: "TechSummit",
      description: "UK's Biggest Tech Career Fair | Bush House, London | October 7, 2023",
      image: "./images/slideshow2.jpg",
      link: "techsummit.html",
      hex: "#33C1FF"
    },
    {
      title: "</HackLondon>",
      description: "KCL & UCL Hackathon | Bush House, London | March 9-10, 2024 | Amazing Prizes",
      image: "./images/slideshow4.jpg",
      link: "https://www.huzzle.app/events/hacklondon-126659",
      hex: "#28A745"
    },
  ];
  
  
  function Hero() {
    return (
      <div className="relative h-screen min-h-[42rem]">
        <Navbar />
        <img
          src={ImageOne}
          alt="Slideshow Image 1"
          className="absolute inset-0 w-full h-full object-cover -z-1"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div className="z-100">
          stuff
        </div>
      </div>
    );
  }