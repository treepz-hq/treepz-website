'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { BlogsData } from '@/lib/dummyData'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const OurBlogComponent = () => {
  const router = useRouter()

  return (
    <div className="sm:mt-[84px] w-full flex flex-col">
      <h1 className="text-[#6F7174] text-base font-semibold mb-8 uppercase">
        Our Blog
      </h1>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-7 sm:gap-10">
        {BlogsData.map(({ src, date, title, desc, href }, index) => (
          <div className="w-full sm:w-[408px] flex flex-col" key={index}>
            <div className="w-full h-[200px] relative rounded-2xl overflow-hidden">
              {src && (
                <Image
                  src={src}
                  fill
                  alt="Blog"
                  sizes="100vw, 100vh"
                  priority
                  className="object-cover absolute"
                />
              )}
            </div>
            <div className="space-y-2">
              <p className="text-[#6F7174] text-base capitalize mt-6">{date}</p>
              <Link href={href} className="text-2xl font-semibold">
                {title}
              </Link>
              <p className="text-[#6F7174] text-base">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant={"outline"}
        className="cursor-pointer rounded-full w-fit mt-8 sm:mt-14  border-gray-900 text-black flex gap-2"
        onClick={() => router.push("https://blog.treepz.com/")}
      >
        Show more
      </Button>
    </div>
  );
}

export default OurBlogComponent