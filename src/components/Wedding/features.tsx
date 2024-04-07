import React from 'react'
import OrangeCheckIcon from '@/assets/svgs/orange-check-icon.svg'

const FirstColumn = ["Hundreds of Vehicle Options", "Full Logistics Plan", "Wedding Account Manager"]
const RightColumn = ["24/7 Treepz Concierge", "Easy Booking Process", "On-Site Coordinator (add-on)"]

const WeddingFeatures = () => {
  return (
    <div className="w-full sm:max-w-[1022px] px-4 sm:px-20 flex flex-col mt-[40px] mt-[123px]">
      <h1 className="text-[#212529] text-[32px] font-bold leading-[40px] mb-10">
        Transport for Weddings
      </h1>
      <div className="flex w-full flex-col space-y-6 text-base sm:text-lg text-[#4D5154] mb-[80px] sm:mb-[107px]">
        <p>
          Imagine Treepz as an extension of your team; whether it’s a wedding
          shuttle service, a wedding party bus, or a limousine, Treepz will make
          sure transportation for your wedding is just as amazing as your big
          day.
        </p>
        <p>
          Treepz transportation provides award-winning wedding rides. Our team
          does everything we can do make sure you your special days is SPECIAL.
          When booking with Treepz, you are guaranteed that your wedding shuttle
          service is reliable and affordable.
        </p>
        <p>
          Feel confident when booking a Wedding Bus, party busses for weddings
          or any other vehicles with us.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <div>{FirstColumn.map(item => (
            <li key={item} className="flex gap-2 list-none items-center mb-4">
                <OrangeCheckIcon />
                {item}
            </li>
        ))}</div>
        <div>{RightColumn.map(item => (
            <li key={item} className="flex gap-2 list-none items-center mb-4">
                <OrangeCheckIcon />
                {item}
            </li>
        ))}</div>
      </div>
    </div>
  );
}

export default WeddingFeatures