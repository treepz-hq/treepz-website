import React from 'react'

interface PostalProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Postal:React.FC<PostalProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-full border sm:h-[388px] border-gray-100 p-8 rounded-2xl shadow-sm mb-4">
      <div className="flex flex-col w-full sm:w-[380px] justify-center mx-auto items-center sm:items-start space-y-6">
        {icon}
        <div className="w-full flex space-y-3 text-center sm:text-left  flex-col">
          <p className="font-semibold text-xl text-[#212529]">{title}</p>
          <span className="text-[#6F7174] text-base max-w-[340px]">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Postal
