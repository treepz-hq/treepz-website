import React from 'react'

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const CardItem:React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-full sm:w-[280px] sm:flex-row sm:h-[236px]  group">
      <div className="flex flex-col w-full sm:w-[280px] justify-center p-4 mx-auto items-center sm:items-start">
        <span className="mb-6 sm:w-[110.65px] sm:h-[112px]">
          {icon}
        </span>
        <div className="w-full sm:h-[100px] flex space-y-3 text-center sm:text-left flex-col">
          <p className="font-semibold text-xl text-[#212529]">{title}</p>
          <span className="text-[#6F7174] text-base">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem