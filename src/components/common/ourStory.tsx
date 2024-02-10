import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <div className="container px-4 sm:px-20 flex justify-between mb-[90px]">
        <div className='flex justify-between gap-16 mt-14 sm:mt-28 '>
             <div className='hidden sm:inline-block w-full sm:w-[204px] h-[336px] relative mt-8'>
                <Image src="/left-abt.png" alt="left" fill priority className="absolute object-contain" />  
            </div>
            <div className="flex flex-col items-center space-y-6 w-full sm:w-[700px] text-center relative">
                <h1 className='text-base sm:text-xl text-[#6F7174] font-medium mb-2 sm:mb-4'>OUR STORY</h1>
                <p className="text-2xl sm:text-3xl font-medium">Treepz was founded by four entrepreneurs who were tired of the broken transport system in Africa and wanted to make a change.</p>
                <span className='text-base sm:text-xl text-[#6F7174]'>They started with bus-hailing solution which grew quickly, and they realized make an even great impact, more has to be done, hence Treepz.</span>

                <div className='hidden sm:inline-block w-full sm:w-[312px] h-[184px] absolute -left-10 -bottom-28'>
                    <Image src="/bottom-abt.png" alt="right" fill priority className="absolute object-contain" />  
                </div>
            </div>
        </div>
        <div className='hidden sm:inline-block w-full sm:w-[204px] h-[336px] relative'>
            <Image src="/right-abt.png" alt="right" fill priority className="absolute object-contain" />  
        </div>
    </div>
  )
}

export default OurStory