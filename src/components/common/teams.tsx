import React from 'react'
import TeamCard from '@/components/About/card'
import { BoardMembers, FoundersData } from '@/lib/dummyData'

const MeetOurTeams = () => {
  return (
    <>
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-[320px]">
          <h1 className="text-xl text-[#6F7174] font-medium uppercase">
            OUR BOARD OF DIRECTORS
          </h1>
          <p className="text-base sm:text-2xl text-[#212529] font-medium">
            Board members bring expertise in impact investing, strategic
            management, law, sales, and technology
          </p>
          <p className="text-[#6F7174] text-base">
            Each person has an history with transportation and technology
            business in Africa
          </p>
        </div>
        <div className="w-full sm:w-[900px] flex flex-row flex-wrap gap-4">
          {BoardMembers.map(({ src, name, title, rank }) => (
            <TeamCard
              src={src}
              name={name}
              title={title}
              rank={rank}
              key={src}
            />
          ))}
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4 mt-10">
        <div className="flex flex-col gap-4 w-full sm:w-[320px]">
          <h1 className="text-xl text-[#6F7174] font-medium uppercase">
            Our Founders
          </h1>
          <p className="text-base sm:text-2xl text-[#212529] font-medium">
            The team brings together decades of experience across
            transportation, and technology
          </p>
          <p className="text-[#6F7174] text-base">
            Each person has an history with transportation and technology
            business in Africa
          </p>
        </div>
        <div className="w-full sm:w-[900px] flex flex-row flex-wrap gap-4">
          {FoundersData.map(({ src, name, title }) => (
            <TeamCard
              src={src}
              name={name}
              title={title}
              key={src}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MeetOurTeams