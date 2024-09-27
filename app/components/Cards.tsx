"use client"; // This ensures the component is treated as a client-side component

import React from 'react';
import Button from './buttons/Button';

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
    buttonText?: string;
    buttonLink?: string;
    type?: 'white' | 'black' | 'frosted'; // Added 'frosted' type
    imageStyle?: React.CSSProperties; // Allow passing custom styles for the image
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, imageAlt, buttonText, buttonLink, type = 'white', imageStyle }) => {
    // Define styles for different card types
    const cardStyles = {
        white: 'bg-neutral-100 text-neutral-900',
        black: 'bg-dark-grey text-neutral-50',
        frosted: 'bg-white bg-opacity-5 backdrop-blur-md shadow-lg text-neutral-50 border border-white border-opacity-10', // Frosted glass effect
    };

    return (
        <div className={`${cardStyles[type]} shadow-xl rounded-md overflow-hidden`}>
            <img
                src={imageUrl}
                alt={imageAlt}
                style={{ borderRadius: '5px 5px 2.5px 2.5px', ...imageStyle }} // Spread custom imageStyle
            />
            <div className="px-4 pt-4 pb-7">
                <h2 className="font-titillium text-xl font-bold pb-2">{title}</h2>
                <p className="font-exo text-md font-medium">{content}</p>
                {buttonText && buttonLink && (
                    <Button
                        className="mt-3"
                        label={buttonText}
                        onClick={() => window.open(buttonLink, '_blank')}
                        type="black"
                    />
                )}
            </div>
        </div>
    );
};

export default Card;
