import React from "react";

const SwipeWordAnimation: React.FC = () => {
  return (
    <div className="wordCarousel flex">
      <span className="font-bold text-3xl sm:text-[56px] uppercase mt-12 sm:mt-20 sm:leading-[64px]">
        treepz is the corporate mobility <br />
        solution for
        <div className="inline-block">
          <ul className="flip5">
            <li className="text-[#F8B02B]">Employee transportation</li>
            <li className="text-[#FA6533]">Conference Shuttling</li>
            <li className="text-[#3B6FE9]">vehicle rental</li>
            <li className="text-[#3CC13B]">you</li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export default SwipeWordAnimation;
