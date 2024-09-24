import React from 'react';

const Footer = () => {
    return (
        <div className="slides-generic_light" style={{ backgroundColor: 'white' }}>
            <div className="content-generic">
                <hr className="bg-main-color h-[1.5px]" />

                <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <h4><a style={{ float: 'right' }} href="login.html">Login</a></h4>
                    <h4><a href="mailto:contact@kcltech.co.uk" target="_blank" rel='noopener noreferrer'>contact@kcltech.co.uk</a> | <a href="about.html">About us</a></h4>
                </div>
                <script type="text/javascript" src="js.js"></script>
            </div>
        </div>
    );
};

export default Footer;
