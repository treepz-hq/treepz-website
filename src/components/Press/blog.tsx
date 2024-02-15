'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const OurBlogComponent = () => {
  return (
    <div className="sm:mt-[84px] w-full flex flex-col">
      <h1 className="text-[#6F7174] text-base font-semibold mb-8 uppercase">
        Our Blog
      </h1>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-7 sm:gap-10">
        <div className="w-full sm:w-[408px] flex flex-col">
          <div className="w-full h-[200px] relative rounded-2xl overflow-hidden">
            <Image
              src="/blog-1.png"
              fill
              alt="Blog"
              priority
              className="object-cover absolute"
            />
          </div>
          <div className="space-y-2">
            <p className="text-[#6F7174] text-base capitalize mt-6">
              Jan 17, 2023
            </p>
            <h1 className="text-2xl font-semibold">
              Moving in the heart of Africa
            </h1>
            <p className="text-[#6F7174] text-base">
              Moving in the heart of Africa can be an exciting and enriching
              experience.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[408px] flex flex-col">
          <div className="w-full h-[200px] relative rounded-2xl overflow-hidden">
            <Image
              src="/blog-1.png"
              fill
              alt="Blog"
              priority
              className="object-cover absolute"
            />
          </div>
          <div className="space-y-2">
            <p className="text-[#6F7174] text-base capitalize mt-6">
              Jan 17, 2023
            </p>
            <h1 className="text-2xl font-semibold">
              Moving in the heart of Africa
            </h1>
            <p className="text-[#6F7174] text-base">
              Moving in the heart of Africa can be an exciting and enriching
              experience.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[408px] flex flex-col">
          <div className="w-full h-[200px] relative rounded-2xl overflow-hidden">
            <Image
              src="/blog-1.png"
              fill
              alt="Blog"
              priority
              className="object-cover absolute"
            />
          </div>
          <div className="space-y-2">
            <p className="text-[#6F7174] text-base capitalize mt-6">
              Jan 17, 2023
            </p>
            <h1 className="text-2xl font-semibold">
              Moving in the heart of Africa
            </h1>
            <p className="text-[#6F7174] text-base">
              Moving in the heart of Africa can be an exciting and enriching
              experience.
            </p>
          </div>
        </div>
        
        
      </div>
      <Button
        variant={"outline"}
        className="cursor-pointer rounded-full w-fit mt-8 sm:mt-14  border-gray-900 text-black flex gap-2"
        //onClick={() => {}}
      >
        Show more
      </Button>
    </div>
  );
}

export default OurBlogComponent