"use client";
import React, { useEffect } from 'react';

const SlidingFooter = () => {
    const footerStyle: React.CSSProperties = {
        fontFamily: "'Exo', sans-serif",
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '18px',
        backgroundColor: 'white',
        borderTop: '1px solid #083C5C',
        color: '#083C5C',
        fontSize: '10px',
        zIndex: 10,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
    };

    const marqueeStyle: React.CSSProperties = {
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
    };

    const footerTextStyle = {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'slide-left 15s linear infinite',
        color: '#083C5C',
        fontSize: '10px',
    };

    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        const keyframes = `
        @keyframes slide-left {
          0% {
            transform: translateX(120%);  // Start just off the visible right side
          }
          100% {
            transform: translateX(-120%);  // Move fully off the visible left side
          }
        }`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }, []);

    return (
        <div style={footerStyle}>
            <div style={marqueeStyle}>
                <p style={footerTextStyle}><b>©2024 KCL Tech</b> - King's College London's Technology Society</p>
            </div>
        </div>
    );
};

export default SlidingFooter;
