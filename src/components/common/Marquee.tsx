import React from "react";
import PartnersLogo from '../common/partners';

interface MarqueeProps {
  data: any;
}

const Marquee: React.FC<MarqueeProps> = ({ data }) => {

  return (
    <div className="marquee-container mt-14 flex flex-col space-y-20">
      <div className="marquee-wrapper-left">
          <div className="marquee-item flex w-full gap-20">
            <PartnersLogo data={data} />
          </div>
      </div>
      <div className="marquee-wrapper-right mt-8">
          <div className="marquee-item flex w-full gap-20">
            <PartnersLogo data={data} />
          </div>
        </div>
    </div>

  );
};

export default Marquee;
