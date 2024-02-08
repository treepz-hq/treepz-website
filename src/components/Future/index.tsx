import React from 'react'
import CardItem from './CardItem';
import { FutureData } from './data';

const FutureTransportation = () => {
  return (
    <div className="container px-4 sm:px-20 sm:!mt-32 flex flex-col w-full">
      <h1 className="font-bold text-[28px] uppercase leading-[32px] text-[#212529] mb-10 text-center sm:text-left mb-14">
        THIS IS THE FUTURE OF TRANSPORTATION
      </h1>
      <div className='flex w-full justify-between flex-wrap gap-10'>
        {FutureData.map(({ icon, title, description }) => (
            <CardItem icon={icon} title={title} description={description} key={title} />
        ))}
      </div>
    </div>
  );
}

export default FutureTransportation