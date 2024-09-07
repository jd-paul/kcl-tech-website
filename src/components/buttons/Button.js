import React from 'react';

const Button = ({ type = 'a', label, onClick }) => {
  const baseClasses = 'font-semibold text-light-grey text-sm px-4 py-2 min-w-[60px] mx-1 rounded-md outline-white cursor-pointer transition-colors duration-300';
  const typeClasses = {
    a: 'bg-transparent text-white border border-white hover:bg-white/10',
    b: 'bg-transparent text-black border border-transparent hover:bg-black/10',
    c: 'bg-accent-color-a text-white border-none hover:bg-accent-color-a/80',
  };
  
  return (
    <button className={`${baseClasses} ${typeClasses[type]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
