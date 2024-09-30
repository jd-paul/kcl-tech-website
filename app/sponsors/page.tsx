import React from 'react';

import NavbarBlack from '../components/NavbarBlack';

const Page: React.FC = () => {
    const data = {
        title: "Event Title",
        start: "10:00 AM",
        finish: "12:00 PM",
        date: "2023-10-01",
        location: "Event Location",
        bring: "Laptop, charger, and enthusiasm!",
        description: "Event description goes here."
    };

    return (
        <div>
            <NavbarBlack />
            <div className="slides-generic_light" style={{ backgroundColor: '#ffffff', paddingTop: '2rem' }}>
                <div className="content-generic">
                    <section className="type-b">
                        <h2 style={{ color: 'white' }}>Become a Sponsor</h2>
                        <p style={{ color: 'white' }}>
                            Contact us to become a sponsor at{' '}
                            <a href="mailto:partnerships@kcltech.co.uk">
                                <b>
                                    <u>partnerships@kcltech.co.uk</u>
                                </b>
                            </a>.
                        </p>
                        <p style={{ color: 'white' }}>
                            Learn more{' '}
                            <a href="/docs/KCLTech_GetInvolved.pdf">
                                <b>
                                    <u>here</u>
                                </b>
                            </a>.
                        </p>
                        <br />
                    </section>

                    <br />
                    <h1>Our Sponsors</h1>
                    <br />

                    <section className="type-a">
                        <img src="logos/HK.png" width="70" height="70" className="icon" alt="HK Logo" />
                        <br />
                        <a href="https://www.blackrock.com/uk">
                            <img src="./images/BLK_eng_black_rgb.png" alt="BlackRock Logo" height="100" width="300" />
                        </a>
                        <br />
                        <h1>BlackRock</h1>
                        <p>
                            Learn more about our sponsor at{' '}
                            <a href="https://www.blackrock.com/uk">
                                <b>
                                    <u>https://www.blackrock.com/uk</u>
                                </b>
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Page;