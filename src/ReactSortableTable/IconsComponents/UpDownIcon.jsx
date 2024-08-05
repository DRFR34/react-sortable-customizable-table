import React from 'react';

export default function UpDownIcon({ className = 'upDownIcon', width = 24, height = 24, fillColor = 'currentColor' }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 562.392 562.391"
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M123.89,262.141h314.604c19.027,0,17.467-31.347,15.496-47.039c-0.605-4.841-3.636-11.971-6.438-15.967L303.965,16.533c-12.577-22.044-32.968-22.044-45.551,0L114.845,199.111c-2.803,3.996-5.832,11.126-6.438,15.967C106.43,230.776,104.863,262.141,123.89,262.141z"></path>
            <path d="M114.845,363.274l143.569,182.584c12.577,22.044,32.968,22.044,45.551,0l143.587-182.609c2.804-3.996,5.826-11.119,6.438-15.967c1.971-15.691,3.531-47.038-15.496-47.038H123.89c-19.027,0-17.46,31.365-15.483,47.062C109.019,352.147,112.042,359.277,114.845,363.274z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
