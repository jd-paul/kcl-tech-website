import React from 'react';

const Footer = () => {
    return (
        <div className="slides-generic_light" style={{ backgroundColor: 'white' }}>
            <div className="content-generic">
                <hr className="bg-main-color h-[1.5px]" />

                <div className="py-3 font-exo">
                    <h4 className="font-bold underline" style={{ float: 'right' }}><a href="login.html">Staff login</a></h4>
                    <h4>Contact us: <a href="mailto:contact@kcltech.co.uk" target="_blank" rel='noopener noreferrer' className="font-bold underline">contact@kcltech.co.uk</a></h4>
                </div>
                <script type="text/javascript" src="js.js"></script>
            </div>
        </div >
    );
};

export default Footer;
