import React from 'react'

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const CardItem:React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:h-[236px] shadow rounded-md transition-transform duration-300 transform-gpu group">
      <div className="flex flex-col w-full sm:w-[280px] justify-center p-4 mx-auto items-center sm:items-start space-y-4 transition-transform duration-300 transform-gpu group-hover:scale-105">
        {icon}
        <div className="w-full sm:w-[233px] flex space-y-3 text-center sm:text-left sm:text-left flex-col">
          <p className="font-semibold text-xl text-[#212529]">{title}</p>
          <span className="text-[#6F7174] text-base">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem