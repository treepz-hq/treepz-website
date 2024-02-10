import React from 'react'
import Image from 'next/image'

const Investors = () => {
  return (
    <div className="w-full sm:max-w-[1200px] px-4  mx-auto gap-8 sm:gap-4 flex flex-col my-[70px] sm:my-[176px] justify-center">
      <h1 className="w-full text-center text-2xl text-[#6F7174] font-medium">
        INVESTORS IN TREEPZ
      </h1>
      <div className="flex justify-between items-center flex-wrap mt-5 sm:mt-10 space-y-8 sm:space-y-0">
        <Image
          src="/investors/google.png"
          alt="google"
          width={139}
          height={44}
        />
        <Image
          src="/investors/techstars.png"
          alt="tech stars"
          width={152}
          height={44}
        />
        <Image
          src="/investors/sosv.png"
          alt="sosv"
          width={101.1}
          height={44}
        />
        <Image
          src="/investors/shockven.png"
          alt="shock venture"
          width={44}
          height={44}
        />
        <Image
          src="/investors/LoftyInc.png"
          alt="Lofty"
          width={78.8}
          height={44}
        />
        <Image
          src="/investors/BKR.png"
          alt="BKR"
          width={79.2}
          height={44}
        />
        <Image
          src="/investors/ODBA.png"
          alt="ODBA"
          width={131.5}
          height={44}
        />
        <Image
          src="/investors/MT.png"
          alt="BKR"
          width={69.7}
          height={44}
        />
      </div>
    </div>
  );
}

export default Investors