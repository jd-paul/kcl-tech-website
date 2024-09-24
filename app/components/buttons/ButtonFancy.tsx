import React from 'react';

interface ButtonFancyProps {
    label?: string;
    onClick: () => void;
    backgroundColor?: string;
    style?: React.CSSProperties;
}

const ButtonFancy: React.FC<ButtonFancyProps> = ({ label = 'Button 50', onClick, backgroundColor, style }) => {
    return (
        <div className="button-container" style={{ position: 'relative', ...style }}>
            <div
                className="background-rectangle"
                style={{ backgroundColor }}
            ></div>
            <button
                className="button-fancy font-titillium font-semibold text-sm"
                role="button"
                onClick={onClick}
            >
                {label}
            </button>

            <style>
                {`
          .button-container {
            position: relative;
            height: 36.8px;
            display: inline-block;
          }

          .background-rectangle {
            position: absolute;
            top: -1px;
            left: -1px;
            width: calc(100% + 3px);
            height: calc(100% + 3px);
            border-radius: 0.375rem;
            z-index: 0; /* Behind the button */
            transition: transform 0.2s cubic-bezier(.6,.15,0,.99);
          }

          .button-fancy {
            height: 36.8px;
            position: relative;
            background-color: #fff;
            border-radius: 0.375rem;
            color: #242424;
            padding: 8px 12px;
            text-align: center;
            text-transform: none;
            cursor: pointer;
            font-size: 14px;
            line-height: 20px;
            transition: transform 0.2s cubic-bezier(.6,.15,0,.99);
            z-index: 1; /* Above the background rectangle */
          }

          .button-container:hover .background-rectangle {
            transform: translate(2px, 2px);
          }
        `}
            </style>
        </div>
    );
};

export default ButtonFancy;
