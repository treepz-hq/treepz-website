import Image from 'next/image'
import OurBlogComponent from './blog';
import SubscribeComponent from './subscribe';
import MediaComponent from './media';
import AnnouncementComponent from './announcement';

const PressComponent = () => {
    return (
      <>
        <div className="container px-4 sm:px-20 mt-10 sm:mt-24">
          <div className="flex flex-col sm:flex-row justify-between sm:gap-14 w-full rounded-2xl">
            <div className="w-full sm:w-[621px] overflow-hidden">
              <h1 className="text-[#6F7174] text-base font-semibold mb-8">
                Treepz in the News
              </h1>
              <div className="w-full h-[240px] sm:h-[344px] relative overflow-hidden rounded-2xl">
                <Image
                  src="/press-hero.png"
                  fill
                  alt="press hero"
                  priority
                  className="object-cover absolute"
                />
              </div>
              <h1 className="text-2xl sm:text-[32px] font-semibold sm:leading-[40px] capitalize mt-3 sm:mt-6">
                Nigerian MaaS startup Treepz closes $2.8M seed round to fund
                East African expansion
              </h1>
              <p className="text-[#6F7174] text-base capitalize mt-3 sm:mt-6">
                Jan 17, 2023
              </p>
            </div>
            <div className="w-full sm:w-[596px] flex flex-col space-y-6 pb-6 pt-6 sm:pt-14">
              <div className="w-full flex flex-col space-y-3 border-b pb-6">
                <div className="w-[131px] h-5 relative">
                  <Image
                    src="/TechCr.png"
                    fill
                    priority
                    className="object-contain absolute"
                    alt="company"
                  />
                </div>
                <p className="capitalize text-gray-900 text-base w-full my-3 font-semibold">
                  Nigerian MaaS startup Treepz closes $2.8M seed round to fund
                </p>
                <p className="text-[#6F7174] text-base capitalize mt-6">
                  Jan 17, 2023
                </p>
              </div>
              <div className="w-full flex flex-col space-y-3 border-b pb-6">
                <div className="w-[131px] h-5 relative">
                  <Image
                    src="/TechCr.png"
                    fill
                    priority
                    className="object-contain absolute"
                    alt="company"
                  />
                </div>
                <p className="capitalize text-gray-900 text-base w-full my-3 font-semibold">
                  Nigerian MaaS startup Treepz closes $2.8M seed round to fund
                </p>
                <p className="text-[#6F7174] text-base capitalize mt-6">
                  Jan 17, 2023
                </p>
              </div>
              <div className="w-full flex flex-col space-y-3 border-b pb-6">
                <div className="w-[131px] h-5 relative">
                  <Image
                    src="/TechCr.png"
                    fill
                    priority
                    className="object-contain absolute"
                    alt="company"
                  />
                </div>
                <p className="capitalize text-gray-900 text-base w-full my-3 font-semibold">
                  Nigerian MaaS startup Treepz closes $2.8M seed round to fund
                </p>
                <p className="text-[#6F7174] text-base capitalize mt-6">
                  Jan 17, 2023
                </p>
              </div>
              <div className="w-full flex flex-col space-y-3 border-b pb-6">
                <div className="w-[131px] h-5 relative">
                  <Image
                    src="/TechCr.png"
                    fill
                    priority
                    className="object-contain absolute"
                    alt="company"
                  />
                </div>
                <p className="capitalize text-gray-900 text-base w-full my-3 font-semibold">
                  Nigerian MaaS startup Treepz closes $2.8M seed round to fund
                </p>
                <p className="text-[#6F7174] text-base capitalize mt-6">
                  Jan 17, 2023
                </p>
              </div>
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
