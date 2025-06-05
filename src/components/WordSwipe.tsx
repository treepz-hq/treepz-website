import React, { useState, useEffect } from "react";

const SwipeWordAnimation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Employee transportation",
    "Conference Shuttling",
    "vehicle rental",
    "you",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, texts.length]);

  return (
    <div className="flex">
      <span className="font-bold text-3xl sm:text-[56px] uppercase mt-12 sm:mt-20 sm:leading-[64px]">
        treepz is the corporate mobility <br />
        solution for
        <div className="inline-block">
          <ul>
            {texts.map((text, index) => (
              <li
                key={index}
                className={`ml-2 ${
                  index === 0
                    ? "text-[#F8B02B]" // Employee transportation
                    : index === 1
                    ? "text-[#FA6533]" // Conference Shuttling
                    : index === 2
                    ? "text-[#3B6FE9]" // vehicle rental
                    : "text-[#3CC13B]" // you
                } ${index === currentIndex ? "slide-up" : "hidden"}`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </span>
    </div>
  );
};

export default SwipeWordAnimation;
