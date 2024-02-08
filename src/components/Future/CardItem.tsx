import React from 'react'

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const CardItem:React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col w-full sm:w-[280px] justify-center mx-auto items-center sm:items-start space-y-4">
        {icon}
        <div className="w-full sm:w-[233px] flex space-y-3 text-center sm:text-left sm:text-left flex-col">
          <p className="font-semibold text-xl text-[#212529]">
            {title}
          </p>
          <span className="text-[#6F7174] text-base">
            A selection of hundreds of vehicles, each with professional drivers.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardItem