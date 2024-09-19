import React from 'react';
import './SimleyIcon.css';

const SmileyIcon = () => (
    <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="8" cy="10" r="1.5" fill="white" />
        <circle cx="16" cy="10" r="1.5" fill="white" />
        <path
            d="M8 15 C9 13 11 13 12 15 C13 13 15 13 16 15"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
);

export default SmileyIcon;