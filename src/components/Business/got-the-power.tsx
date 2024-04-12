/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import GoThePower from "@/assets/svgs/got-the-power.svg";
import EndlessIcon from "@/assets/svgs/endless-icon.svg";
import { IntegrationData } from "@/lib/dummyData";
import CheckedIcon from "@/assets/icons/Checked-icon";

const GotPower = () => {
  return (
    <div className="bg-[#1E1E1E] text-white pt-40 sm:pt-[132px] sm:pb-[172px] mb-40 sm:mb-[26px]">
      <div className="container px-4 sm:px-20 mx-auto">
        <div className="flex justify-between md:flex-row flex-col w-full">
          <div className="w-full sm:w-[516px] flex flex-col">
            <GoThePower />

            <div className="mt-10 sm:mt-14 space-y-6">
              <h3 className="text-2xl font-bold sm:text-[28px] leading-[32px]">
                You&lsquo;ve Got the Power
              </h3>
              <p className="font-bold text-lg sm:text-xl">
                Life can be… a lot. And if you&lsquo;re organizing an event,
                things can feel almost impossible.
              </p>
              <p className="text-lg sm:text-xl">
                Event planners are stressed, and trips shouldn&lsquo;t add to
                that! Treepz takes care of your transportation needs – business
                meetings, family outings, social events – with a user-friendly
                app and reliable service. It&lsquo;s cost-effective, flexible,
                and saves you the hassle, leaving you feeling cool, calm, and in
                control.
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
        <div className="bg-[#FEF0EB] rounded-[32px] w-full md:px-[60px] gap-6 py-[20px] px-[12px] md:flex-row  flex-col md:py-[32px] text-black flex mt-40 ">
          <div className=" text-[20px] sm:text-[32px] sm:leading-10 font-bold">
            Navigating a Comprehensive Service{" "}
          </div>
          <div>
            <h1 className="md:font-medium  text-[20px]">
              Group transportation services are integral for events, outings,
              and other occasions to make sure everyone has a safe yet enjoyable
              journey.{" "}
            </h1>
            <p className="md:text-[20px]  text-[#6F7174] mt-[24px]">
              By using Treepz’s services, you will be equipped to find a vehicle
              or fleet of vehicles that best suits your specific requirements as
              well as budget range.
            </p>
            <p className="md:text-[20px] text-[#6F7174] mt-[24px]">
              When looking into group transportation solutions, it's important
              to keep an eye on two key factors: exceptional customer care
              delivery and the availability of numerous vehicles. These elements
              will enable your group to have pleasant experiences during
              excursions or any type of gathering involving passengers traveling
              together.
            </p>
            <p className=" md:text-[20px] text-[#6F7174] mt-[24px]">
              At Treepz, we have everything you need – and much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotPower;
