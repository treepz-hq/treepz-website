import React from "react";

interface ArrowDownIconProps {
  className?: string;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ className }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform ${className}`}
    >
      <path
        d="M13.5491 5.96667L9.20247 10.3133C8.68914 10.8267 7.84914 10.8267 7.3358 10.3133L2.98914 5.96667"
        stroke="#002300"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
