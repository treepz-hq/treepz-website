import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <div className="container px-4 sm:px-20 flex justify-between my-[135px]">
        <div className='flex justify-between gap-16 mt-14 sm:mt-28 '>
             <div className='hidden sm:inline-block w-full sm:w-[204px] h-[336px] relative mt-8'>
                <Image src="/left-abt.png" alt="left" fill sizes="100vw" priority className="absolute object-contain" />  
            </div>
            <div className="flex flex-col items-center space-y-6 w-full sm:w-[700px] text-center relative mx-[82px]">
                <h1 className='text-base sm:text-xl text-[#6F7174] font-medium mb-2 sm:mb-4'>OUR STORY</h1>
                <p className="text-2xl sm:text-[32px] leading-[40px] text-[#212529] font-semibold">Treepz was founded by four entrepreneurs who were tired of the broken transport system in Africa and wanted to make a change.</p>
                <span className='text-base sm:text-xl text-[#6F7174]'>Starting with a successful car renting app, the founders saw an even greater potential for impact in corporate mobility. This vision led to the creation of Treepz.</span>

                <div className='hidden sm:inline-block w-full sm:w-[312px] h-[184px] absolute -left-32 -bottom-36 sm:mt-[60px]'>
                    <Image src="/bottom-abt.png" alt="right" sizes="100vw, 100vh" fill priority className="absolute object-contain" />  
                </div>
            </div>
        </div>
        <div className='hidden sm:inline-block w-full sm:w-[204px] h-[336px] relative'>
            <Image src="/right-abt.png" alt="right" fill sizes="100vw" priority className="absolute object-contain" />  
        </div>
    </div>
  )
}

export default OurStory