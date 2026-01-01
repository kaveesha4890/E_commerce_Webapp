import React from 'react';

const Logo = ({ width = 500, height = 150, mainColor = '#292929', accentColor = '#FF69B4' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .main-text {
              font-family: 'Georgia', serif;
              font-size: 50px;
              font-weight: bold;
              fill: ${mainColor};
            }
            .sub-text {
              font-family: 'Arial', sans-serif;
              font-size: 30px;
              fill: red;
              
            }
            .accent {
              fill: ${accentColor};
            }
          `}
        </style>
      </defs>
      <g>
        
        
        {/* KM Fashion Text */}
        <text x="50" y="100" className="main-text">
          KM
        </text>
        <text x="150" y="100" className="sub-text text-yellow-600 ">
          Fashion
        </text>
      </g>
    </svg>
  );
};

export default Logo;
