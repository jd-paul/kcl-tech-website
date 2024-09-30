import React from 'react';

interface ButtonProps {
    type?: 'white' | 'black' | 'orange' | 'blue' | 'purple';
    label: string;
    onClick?: () => void;
    backgroundColor?: string;
    id?: string;
    className?: string; // Optional custom classes
}

const Button: React.FC<ButtonProps> = ({ type = 'white', label, onClick, backgroundColor, id, className }) => {
    const baseClasses = 'font-titillium font-semibold text-md px-3 min-w-[60px] pt-[0.5rem] pb-[0.5rem] rounded-md cursor-pointer transition-all duration-200 overflow-hidden truncate ';
    const typeClasses = {
        white: 'bg-transparent text-white outline outline-1 outline-white hover:bg-white hover:text-dark-grey',
        black: 'bg-neutral-300 text-neutral-700 outline outline-1 outline-black hover:bg-dark-grey hover:text-white underline',
        orange: 'bg-transparent text-white outline outline-1 outline-accent-color-a hover:bg-accent-color-a hover:text-dark-grey',
        blue: 'bg-transparent text-white outline outline-1 outline-accent-color-b hover:bg-accent-color-b hover:text-dark-grey',
        purple: 'bg-transparent text-white outline outline-1 outline-accent-color-c hover:bg-accent-color-c hover:text-dark-grey',
    };

    return (
        <button
            id={id}
            className={`${baseClasses} ${typeClasses[type]} ${className ? className : ''}`} // Merge custom className
            style={{ backgroundColor }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
