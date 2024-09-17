import React from 'react';

const Button = ({ type = 'a', label, onClick }) => {
  const baseClasses = 'font-titillium font-semibold text-sm px-3 py-2 min-w-[60px] h-[2.3rem] rounded-md cursor-pointer transition-all duration-200 overflow-hidden truncate ';
  const typeClasses = {
    white: 'bg-transparent text-white outline outline-1 outline-white hover:bg-white hover:text-dark-grey',
    orange: 'bg-transparent text-white outline outline-1 outline-accent-color-a hover:bg-accent-color-a hover:text-dark-grey',
    blue: 'bg-transparent text-white outline outline-1 outline-accent-color-b hover:bg-accent-color-b hover:text-dark-grey',
    purple: 'bg-transparent text-white outline outline-1 outline-accent-color-c hover:bg-accent-color-c hover:text-dark-grey',
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[type]}`}
      onClick={onClick}
      style={{ transitionTimingFunction: 'cubic-bezier(.6,.15,0,.99)' }}
    >
      {label}
    </button>
  );
};

export default Button;
