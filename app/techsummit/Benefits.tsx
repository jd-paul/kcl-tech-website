import React from 'react';

import Background1 from "../images/picture-background1.jpg";
import Background2 from "../images/picture-background2.jpg";

const Hero: React.FC = () => {
    return (
        <>
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
                    backgroundImage: `url(${Background2.src})`,
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
                <div className="slides-generic" style={{ paddingTop: "7rem", paddingBottom: "300rem", margin: 0, backgroundColor: "transparent" }}>
                    <div className="content-generic" style={{ zIndex: 2 }} >
                        <div className="grid grid-cols-7 grid-rows-1 gap-0">
                            <div className="col-span-4 row-span-1"> {/* div1 occupies columns 1 to 3 */}
                                <h1 className="text-4xl md:text-5xl text-neutral-50 font-exo font-bold leading-[3.5rem] mb-1">
                                    Boost your career 10x in 1 day
                                </h1>
                                <ul className="pl-[0.5rem]">
                                    <li className="font-titillium text-2xl font-normal italic text-neutral-200">
                                        • Meet 2000+ talented entrepreneur students from the best UK universities
                                    </li>
                                    <li className="font-titillium text-2xl font-normal italic text-neutral-200">
                                        • Meet 2000+ talented entrepreneur students from the best UK universities
                                    </li>
                                </ul>

                            </div>
                            <div className="col-span-3 row-span-1"> {/* div2 occupies columns 4 to 5 */}
                                Div 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;



{/* <div className="absolute left-[1.5rem] right-[1.5rem] top-[20%] md:left-[15%] md:pr-[15%] md:top-[25%] flex flex-col items-start">
<h1 className="font-playfair text-6xl font-black text-neutral-50">
    TechSummit 2024
</h1>
<p className="font-playfair text-3xl font-normal italic text-neutral-50">
    Connect with top employers and discover career opportunities in tech
    A <span className="text-accent-color-a">UCL</span> x <span className="text-accent-color-c">KCL</span> collaboration
</p>
</div>

<div className="absolute left-[1.5rem] right-[1.5rem] bottom-[20%] md:right-[15%] md:pl-[15%] md:bottom-[25%] flex flex-col items-end">
<div className="bg-dark-grey p-4 rounded-[5px] w-[26rem] text-center">
    <h1 className="font-exo text-neutral-50 font-black text-3xl">COMING SOON</h1>

    <div className="border-2 border-neutral-50 px-4 py-2 text-center mt-3 mb-4">
        <h1 className="font-exo text-neutral-50 text-3xl">10 19 2024 </h1>
    </div>

    <Button type="ticket" label="Grab your free ticket!" />
</div>
</div> */}


{/* <div className="bg-dark-grey px-[2.5rem] py-[1.5rem] rounded-[5px] w-full md:w-[26rem] text-center">
                                <h1 className="font-exo text-neutral-50 font-black text-3xl">COMING SOON</h1>

                                <div className="border-2 border-neutral-50 px-4 py-2 text-center mt-3 mb-4">
                                    <h1 className="font-exo text-neutral-50 text-3xl">October 19, 2024</h1>
                                </div>

                                <Button type="ticket" label="Grab your FREE ticket!" />
                            </div> */}