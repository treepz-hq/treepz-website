import React from 'react'
import Image from 'next/image'
import LinkedinIcon from '@/assets/svgs/linkedin-abt.svg'
import Link from 'next/link'

interface TeamCardProps {
    src: string;
    name: string;
    title: string;
    rank?: string;
    social: string
}

const TeamCard:React.FC<TeamCardProps> = ({src, name, title, rank, social }) => {
  return (
    <div className="w-[165px] sm:w-[286.67px] rounded-2xl genShadow h-[228px] sm:h-[320px] relative p-2 sm:p-4">
        <Image src={`/teams/${src}`} alt={src} width={263} height={226} sizes='100vw' priority className="object-contain" />
        <div className="flex gap-2 items-center">
            <h1 className="text-[#212529] text-sm sm:text-base font-semibold mt-[6px]">{name}</h1>
            <Link href={social}>
              <LinkedinIcon />
            </Link>
        </div>
        <div className="flex flex-col space-y-1">
            <h2 className="text-[#4D5154] text-xs sm:text-sm">{title}</h2>
           {!!rank && (
            <h4 className="text-[#6F7174] text-xs">{rank}</h4>
           )} 
        </div>

    </div>
  )
}

export default TeamCard