import React from "react";

import ImageMain from "../../images/picture-of-main.jpg";
import ImageGala from "../../images/picture-of-gala.jpeg";
import ImagePresentation from "../../images/picture-of-presentation.jpg";
import ImageTeam from "../../images/picture-of-team.jpeg";

import StaffKatya from "../../images/committee/Ekaterina Hunter - President.jpg";
import StaffWaseef from "../../images/committee/Waseef Khan - Hackathon Manager.jpeg";
import StaffPaul from "../../images/committee/Paul San Diego - Website Manager and Signature Events Media Manager.jpeg";
import StaffMin from "../../images/committee/Minseok Ryu - Head of Events.jpg";
import StaffAgrima from "../../images/committee/Agrima Khare - Programming Lead.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div>
            <div className="slides-generic"
                style={{ backgroundColor: '#202020', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '6rem', margin: 0 }}>
                <div className="content-generic">
                    <div style={{ display: 'flex', justifyContent: 'left', width: '100%' }}>
                        <h1 className="">We create. <span className="fancy" style={{}}>We are King's Technology Society.</span></h1>
                    </div>

                    <div className="responsive-grid" style={{ paddingTop: '4rem' }}>
                        <div>
                            <h4 className="font-exo" style={{
                                fontWeight: "normal",
                                textAlign: "left",
                                fontSize: "1rem",
                                letterSpacing: "0.075rem",
                                color: "rgba(255, 255, 255, 0.45)"
                            }}>
                                Vision:
                            </h4>

                            <p
                                style={{ color: '#d9d9d9', fontSize: '1.5rem', paddingRight: '0.5rem', fontFamily: "'Share Tech Mono', monospace", textAlign: 'left' }}>
                                We hope to empower ambitious students across London to pursue their technological paths.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-exo" style={{
                                fontWeight: "normal",
                                textAlign: "left",
                                fontSize: "1rem",
                                letterSpacing: "0.075rem",
                                color: "rgba(255, 255, 255, 0.45)"
                            }}>
                                History:
                            </h4>

                            <p
                                style={{ color: '#d9d9d9', fontSize: '1.6rem', paddingRight: '0.5rem', fontFamily: "'Share Tech Mono', monospace", textAlign: 'left' }}>
                                We are a student-run organization at London. We host events and bring in industry speakers.
                            </p>
                        </div>
                    </div>

                    <h3 style={{ paddingTop: '6rem' }}>
                        A <span style={{ color: '#FF946D' }}>thriving community</span> of computer scientists...
                    </h3>

                    <div className="responsive-grid" style={{ marginTop: '1rem' }}>
                        <img src={ImageGala.src} />
                        <img src={ImageMain.src} />
                    </div>

                    <div className="responsive-grid" style={{ marginTop: '1rem' }}>
                        <img src={ImagePresentation.src} />
                        <img src={ImageTeam.src} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', paddingBottom: '2rem', width: '100%' }}>
                        <h3 style={{ margin: 0, color: '#ffffff' }}>
                            ...lead by a committee that loves to <span style={{ color: '#FF946D' }}>create</span>.
                        </h3>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'left', width: '100%', marginTop: '1rem' }}>
                        <h1>Meet the team.</h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', width: '100%', marginTop: '1rem' }}>
                        <div>
                            <div className="card-staff">
                                <div className="card-content">
                                    <img src={StaffKatya.src} />
                                    <h2>Ekaterina Hunter</h2>
                                    <h3 style={{ paddingTop: '0.2rem' }}>MSci Computer Science</h3>
                                    <hr />
                                    <p>President</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card-staff">
                                <div className="card-content">
                                    <img src={StaffWaseef.src} />
                                    <h2>Waseef Khan</h2>
                                    <h3 style={{ paddingTop: '0.2rem' }}>BSc Computer Science with Year in Industry</h3>
                                    <hr />
                                    <p>Hackathon Manager</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card-staff">
                                <div className="card-content">
                                    <img src={StaffPaul.src} />
                                    <h2>Paul San Diego</h2>
                                    <h3 style={{ paddingTop: '0.2rem' }}>BSc Computer Science with Year in Industry</h3>
                                    <hr />
                                    <p>Website engineer & Events Media</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card-staff">
                                <div className="card-content">
                                    <img src={StaffMin.src} />
                                    <h2>Minseok Ryu</h2>
                                    <h3 style={{ paddingTop: '0.2rem' }}>BSc Neuroscience</h3>
                                    <hr />
                                    <p>Head of events</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card-staff">
                                <div className="card-content">
                                    <img src={StaffAgrima.src} />
                                    <h2>Agrima Khare</h2>
                                    <h3 style={{ paddingTop: '0.2rem' }}>BSc Computer Science with Management and Year in Industry</h3>
                                    <hr />
                                    <p>Programming Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-shape-divider-top-1722567921" style={{}}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                    style={{ margin: 0 }}>
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25" className="shape-fill"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5" className="shape-fill"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="shape-fill"></path>
                </svg>
            </div>

            <div className="parallax" style={{ backgroundImage: `url(${ImageMain.src})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div>

                {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', width: '100%', marginTop: '1rem' }}> */}
                <div className="content-generic" style={{ position: 'relative', zIndex: 2, paddingTop: '7rem', paddingBottom: '10rem' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <a><h1 className="text-5xl mb-4 text-white font-bold font-share-tech">About Us</h1></a>
                    </div>

                    <div className="responsive-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', /* Automatically adjust number of columns */
                        gridGap: '1rem', /* Gap between cells */
                        width: '100%'
                    }}>

                        {/* Card 1 */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <div className="card-info">
                                <div className="card-content">
                                    <div style={{ textAlign: 'center' }} className="mb-2">
                                        <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '3rem' }} />
                                    </div>
                                    <h2>Who are we?</h2>
                                    <hr />
                                    <p>We are students from King's College London, coming from a range of backgrounds, passionate about all areas of technology from AI to IoT.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <div className="card-info">
                                <div className="card-content">
                                    <div style={{ textAlign: 'center' }} className="mb-2">
                                        <FontAwesomeIcon icon={faCircleQuestion} style={{ fontSize: '3rem' }} />
                                    </div>
                                    <h2>What do we do?</h2>
                                    <hr />
                                    <p>We connect students and industry, organise events and workshops to develop skills and expertise relevant to current tech trends.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                            <div className="card-info">
                                <div className="card-content">
                                    <div style={{ textAlign: 'center' }} className="mb-2">
                                        <FontAwesomeIcon icon={faRightToBracket} style={{ fontSize: '3rem' }} />
                                    </div>
                                    <h2>How can I join?</h2>
                                    <hr />
                                    <p>Any KCL Student can become a member for free <a style={{ color: 'white' }} href="https://www.kclsu.org/groups/activities/join/22559/" target="_blank"><u><b>here</b></u></a>. Stay Connected by following our Social Media and signing up to our <a style={{ color: 'white' }} href="http://eepurl.com/hLS0ZT" target="_blank"><u><b>newsletter</b></u></a>.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="custom-shape-divider-bottom-1722578256" style={{ zIndex: 2, padding: 0 }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default About;
