import React from 'react'

interface PostalProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Postal:React.FC<PostalProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-[408px] shadow-sm p-8 rounded-2xl gap-4">
      <div className="flex flex-col w-full sm:w-[404px] justify-center mx-auto items-center sm:items-start space-y-4">
        {icon}
        <div className="w-full flex space-y-3 text-center sm:text-left sm:text-left flex-col">
          <p className="font-semibold text-xl text-[#212529]">{title}</p>
          <span className="text-[#6F7174] text-base">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Postal