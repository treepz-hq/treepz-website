import React from "react";
import PartnersLogo from '../common/partners';

interface MarqueeProps {
  data: any;
}

const Marquee: React.FC<MarqueeProps> = ({ data }) => {

  const firstHalf = data.slice(0, Math.ceil(data.length / 2));
  const secondHalf = data.slice(Math.ceil(data.length / 2));

  return (
    <div className="marquee-container mt-14 flex flex-col space-y-20">
      <div className="marquee-wrapper-left">
          <div className="marquee-item flex w-full gap-14">
            <PartnersLogo data={firstHalf} />
          </div>
      </div>
      <div className="marquee-wrapper-right mt-8">
          <div className="marquee-item flex w-full gap-14">
            <PartnersLogo data={secondHalf} />
          </div>
        </div>
    </div>

  );
};

export default Marquee;
