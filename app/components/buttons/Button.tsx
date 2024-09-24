import React from 'react';

interface ButtonProps {
    type?: 'a' | 'white' | 'orange' | 'blue' | 'purple';
    label: string;
    onClick?: () => void;
    backgroundColor?: string;
    id?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'a', label, onClick, backgroundColor, id }) => {
    const baseClasses = 'font-titillium font-semibold text-sm px-3 py-2 min-w-[60px] h-[2.3rem] rounded-md cursor-pointer transition-all duration-200 overflow-hidden truncate ';
    const typeClasses = {
        a: '',
        white: 'bg-transparent text-white outline outline-1 outline-white hover:bg-white hover:text-dark-grey',
        orange: 'bg-transparent text-white outline outline-1 outline-accent-color-a hover:bg-accent-color-a hover:text-dark-grey',
        blue: 'bg-transparent text-white outline outline-1 outline-accent-color-b hover:bg-accent-color-b hover:text-dark-grey',
        purple: 'bg-transparent text-white outline outline-1 outline-accent-color-c hover:bg-accent-color-c hover:text-dark-grey',
    };

    return id ? (
        <button id={id} className={`${baseClasses} ${typeClasses[type]}`} style={{ backgroundColor }} onClick={onClick}>
            {label}
        </button>
    ) : (
        <button className={`${baseClasses} ${typeClasses[type]}`} style={{ backgroundColor }} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
