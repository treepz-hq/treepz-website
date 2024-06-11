import Image from 'next/image'
import OurBlogComponent from './blog';
import SubscribeComponent from './subscribe';
import MediaComponent from './media';
import AnnouncementComponent from './announcement';
import { NewsData } from '@/lib/dummyData';
import Link from 'next/link'

const PressComponent = () => {
    return (
      <>
        <div className="container px-4 sm:px-20 mt-10 sm:mt-24">
          <div className="flex flex-col sm:flex-row justify-between sm:gap-14 w-full rounded-2xl">
            <div className="w-full sm:w-[621px] overflow-hidden">
              <h1 className="text-[#6F7174] text-base font-semibold mb-8">
                Treepz in the News
              </h1>
              <div className="w-full h-[240px] sm:h-[344px] relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/press-hero-1.png"
                  fill
                  alt="press hero"
                  sizes="100vw, 100vh"
                  priority
                  className="object-cover absolute"
                />
              </div>
              <Link href="https://techeconomy.ng/treepz-2023-in-review-transports-1-2-million-passengers-adds-six-new-cities-668-vehicles-and-more/" className="text-2xl sm:text-[32px] font-semibold sm:leading-[40px] capitalize mt-3 sm:mt-6">
                Treepz 2023 in Review – Transports 1.2 million Passengers, Adds
                Six New Cities, 668 Vehicles and More
              </Link>
              <p className="text-[#6F7174] text-base capitalize mt-3 sm:mt-6">
                Jan 24, 2024
              </p>
            </div>
            <div className="w-full sm:w-[596px] flex flex-col space-y-6 pb-6 pt-6 sm:pt-14">
              {NewsData.map(({logo, title, date, href}, index) => (
                <div className="w-full flex flex-col space-y-3 border-b pb-6" key={index}>
                 {logo}
                  <Link href={href} className="capitalize text-gray-900 text-base w-full my-3 font-semibold">
                    {title}
                  </Link>
                  <p className="text-[#6F7174] text-base capitalize mt-6">
                    {date}
                  </p>
                </div>

              ))}
            </div>
          </div>
          {/* Blog */}
          <OurBlogComponent />
          <SubscribeComponent />
        </div>
        <MediaComponent />
        <AnnouncementComponent />
      </>
    );
}

export default PressComponent
