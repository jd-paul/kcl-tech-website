import React from "react";

interface ButtonProps {
  type?: "white" | "black" | "black2" | "orange" | "blue" | "purple" | "ticket";
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  id?: string;
  className?: string; // Optional custom classes
  urlLink?: string; // Link for anchor tag
}

const Button: React.FC<ButtonProps> = ({
  type = "white",
  label,
  onClick,
  backgroundColor,
  id,
  className,
  urlLink,
}) => {
  const baseClasses =
    "font-titillium  text-md px-3 min-w-[60px] pt-[0.5rem] pb-[0.5rem] rounded-[5px] cursor-pointer transition-all duration-200 overflow-hidden truncate ";

  const typeClasses = {
    white:
      "bg-transparent text-white outline outline-1 outline-white hover:bg-white hover:text-dark-grey font-semibold",
    black:
      "bg-neutral-300 text-neutral-700 outline outline-1 outline-black hover:bg-dark-grey hover:text-white underline font-semibold",
    black2:
      "bg-neutral-300 text-neutral-700 outline outline-1 outline-black hover:bg-dark-grey hover:text-white underline font-semibold",
    orange:
      "bg-transparent text-white outline outline-1 outline-accent-color-a hover:bg-accent-color-a hover:text-dark-grey font-semibold",
    blue: "bg-transparent text-white outline outline-1 outline-accent-color-b hover:bg-accent-color-b hover:text-dark-grey font-semibold",
    purple:
      "bg-transparent text-white outline outline-1 outline-accent-color-c hover:bg-accent-color-c hover:text-dark-grey font-semibold",
    ticket:
      "font-exo font-black text-neutral-800 text-2xl bg-neutral-50 hover:scale-105 hover:text-dark-grey",
  };

  const buttonClasses = `${baseClasses} ${typeClasses[type]} ${
    className || ""
  }`;

  return (
    <>
      {onClick ? (
        <button
          id={id}
          className={buttonClasses}
          style={{ backgroundColor }}
          onClick={onClick}
        >
          {label}
        </button>
      ) : (
        <a href={urlLink} target="_blank" rel="noopener noreferrer">
          <button id={id} className={buttonClasses} style={{ backgroundColor }}>
            {label}
          </button>
        </a>
      )}
    </>
  );
};

export default Button;
