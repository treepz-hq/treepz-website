import Image from "next/image";
import GoThePower from '@/assets/svgs/got-the-power.svg'
import EndlessIcon from '@/assets/svgs/endless-icon.svg'
import { IntegrationData } from '@/lib/dummyData'
import CheckedIcon from "@/assets/icons/Checked-icon";

const GotPower = () => {
    return (
      <div className="bg-[#1E1E1E] text-white pt-40 sm:pt-[132px] sm:pb-[172px] mb-40 sm:mb-[296px]">
        <div className="container px-4 sm:px-20 mx-auto">
          <div className="flex justify-between w-full">
            <div className="w-full sm:w-[516px] flex flex-col">
              <GoThePower />
              <div className="mt-10 sm:mt-14 space-y-6">
                <h3 className="text-2xl font-bold sm:text-[28px] leading-[32px]">You&lsquo;ve Got the Power</h3>
                <p className="font-bold text-lg sm:text-xl">
                  Life can be… a lot. And if you&lsquo;re organizing an event,
                  things can feel almost impossible.
                </p>
                <p className="text-lg sm:text-xl">
                  Event planners are stressed, and trips shouldn&lsquo;t add to
                  that! Treepz takes care of your transportation needs –
                  business meetings, family outings, social events – with a
                  user-friendly app and reliable service. It&lsquo;s
                  cost-effective, flexible, and saves you the hassle, leaving
                  you feeling cool, calm, and in control.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-[624px] sm:h-[472pxh-fit] flex flex-col relative rounded-2xl">
              <Image
                src="/treepz-square.png"
                fill
                priority
                sizes="100vw"
                className="absolute object-contain"
                alt="treepz-square"
              />
            </div>
          </div>
        {/* layer 6 */}
        <div className="w-full flex justify-between gap-6 mt-[256px] flex-wrap">
          {[1,2,3,4,5,6].map((_, index) => (
            <div className="w-full sm:w-[616px] h-fit sm:h-[616px] rounded-[32px] p-8 bg-white text-white space-y-4" key={index}>
            <EndlessIcon />
            <div className="w-full flex flex-col space-y-4">
              <h1 className="text-xl sm:text-2xl text-[#231F20] font-semibold">GPS Integration</h1>
              <p className="text-lg sm:text-xl text-[#404244]">At the core of what we like to call the ‘Treepz Revolution’ is GPS technology, which is seamlessly integrated into our central app.</p>
            </div>
              {IntegrationData.map((item, index) => (
                <div key={index} className="flex gap-4 mb-3">
                  <span>
                    <CheckedIcon />
                  </span>
                  <span className="text-[#6F7174]">{item.desc}</span>
                </div>
              ))}
          </div>
          ))}
        </div>
        </div>
      </div>
    );
}

export default GotPower
