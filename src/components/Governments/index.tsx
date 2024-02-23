"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import OurPartners from "../Hero/partners";
import Postal from "../common/card";
import {
  GovernmentsUniqueData,
  AccordionData,
  MiniPartnerData,
} from "@/lib/dummyData";
import TimerIcon from "@/assets/svgs/timer.svg";
import ChevronRightIcon from "@/assets/svgs/chervon-right-nav.svg";
import TechCommLogos from "@/components/common/techs";
import BetterTogetherComponent from "@/components/Trips";
import PopularCitiesCarousel from "@/components/common/PopularCitiesCarousel";
import Link from 'next/link'

const NeededInformations = [
  "Discrete, Reliable, and Punctual",
  "Why Use Swoop for Government Charter Services?",
  "Comfort During Demanding Journeys",
  "Be a Local Business Advocate",
];

const GovernmentsComponent = () => {
  return (
    <div>
      <div className="bg-[url(/government-hero.png)] bg-cover bg-no-repeat w-full h-[650px] sm:h-[708px]">
        <div className="w-full sm:w-[702px] mx-auto text-white pt-[60px] sm:pt-[100px] px-4">
          <h1 className="font-bold text-[28px] leading-[40px] sm:text-[56px] sm:leading-[64px] mb-[28px] uppercase text-center">
            Seamless and Secure: The Premier Government Charter Services
          </h1>
          <p className="text-base sm:text-xl text-center">
            Swoop understands and serves the special needs of government bodies
            that need a dedicated provider of reliable and secure
            transportation. We know that you want a service that always promises
            efficiency, plus stringent safety and discretion—our government
            charter services are meticulously designed to offer just that.
          </p>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full w-fit mx-auto mt-8 sm:mt-14 text-black flex items-center gap-2 mb-11 sm:mb-0"
            //onClick={() => {}}
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col mt-[63px] mb-[113px]">
        <h1 className="text-[32px] font-bold leading-[40px] text-[#212529] my-8 w-full text-center">
          Why Choose Swoop for Your Premier Government Charter Transportation?
        </h1>
        <p className="mb-8 text-base font-semibold text-[#6F7174] w-full text-center">
          Companies who use Treepz
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row justify-between items-center">
          {MiniPartnerData.map(({ src }: any) => (
            <OurPartners src={src} key={src} />
          ))}
        </div>
      </div>
      <div className="w-full sm:max-w-[1022px] mx-auto mb-10 sm:mb-[88px] px-4">
        <h1 className="w-full sm:w-[641px] mx-auto font-bold text-[28px] sm:text-[32px] leading-[40px] uppercase text-[#212529] mb-6 text-center sm:text-left">
          Focus on Your Essential Duties
        </h1>
        <p className="text-xl text-[#4D5154] text-center">
          Large-scale movements between bases, secret training programs,
          diplomatic visits, or even daily transit—each of these activities
          requires meticulous planning and seamless implementation. Swoop’s
          government charter services ensure that transportation is never your
          concern. With us at your service, you can focus on your essential
          duties, while we handle the logistics.
        </p>
      </div>
      {/* unique */}
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row gap-4 sm:flex-wrap">
        {GovernmentsUniqueData.map(({ icon, title, description }) => (
          <Postal
            icon={icon}
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="bg-black">
        <div className="container px-4 sm:px-20 py-[50px] text-white flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[28px] sm:text-[40px] font-medium leading-[48px] text-white">
            Get a Free Quote Right Away
          </h1>
          <div className="flex w-full sm:w-[355px] justify-between items-center mt-4">
            <div className="flex gap-8 w-full">
              <div>
                <TimerIcon />
              </div>
              <div className="flex flex-col w-full sm:w-[111px] text-sm">
                It takes less than
                <span className="font-medium text-base">3 minutes</span>
              </div>
            </div>
            <Button
              variant={"default"}
              className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2"
              //onClick={() => {}}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#FDF2D0] w-full">
        <div className="px-4 sm:pl-20 sm:pr-0 flex justify-between flex-col sm:flex-row">
          <div className="py-4 sm:py-[120px] flex flex-col w-full sm:w-[648px]">
            <h1 className="text-2xl font-bold mb-2 sm:mb-6">
              Government Transportation with Swoop
            </h1>
            <p className="text-lg sm:text-xl w-full">
              With our many vehicle options plus scheduling technology that
              finally puts you in control, Swoop provides super-reliable,
              carefully designed public transport services that fit your
              community and budget. When you speak to our lovely, expert team
              you will be provided with group transport options, key information
              such as cost per passenger or mile, and information to fit your
              financial parameters.
            </p>

            <div className="w-[280px] h-[56px] mt-[20px] sm:mt-[89px] relative">
              <Image
                src="/google-rating.png"
                alt="google rating"
                fill
                priority
                className="absolute object-contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-[650px] h-[400px] sm:h-[670px] relative ">
            <Image
              src="/bus-route.png"
              alt="Bus routing"
              fill
              priority
              className="absolute object-contain sm:object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-20 flex flex-col sm:flex-row justify-between my-4 sm:my-20 py-4">
        <div className="flex flex-col w-full sm:w-[352px] h-fit shadow rounded-lg bg-white sticky top-16 sm:top-24">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {NeededInformations.map((info, index) => (
            <Link
              href={`#info-${index + 1}`}
              className="flex border-b cursor-pointer text-gray-900 flex justify-between items-center p-4"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </Link>
          ))}
        </div>
        <div className="w-full sm:w-[853px] mt-10 sm:mt-0">
          <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px] mb-6">
            Discrete, Reliable, and Punctual
          </h1>
          <div className="space-y-6 text-[#6F7174] text-lg border-b pb-11">
            <p>
              Our government charter services are crafted with the utmost focus
              on security. Whether you need secure vehicles for high-risk
              situations or unmarked cars for discreet transfers, we have it all
              covered. Not only that but our fleet is maintained to the highest
              standards and equipped with the latest safety technologies,
              ensuring you a smooth and worry-free ride that looks every bit as
              professional as you do.
            </p>
          </div>
          <div className="flex flex-col space-y-6 mt-12">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Why Use Swoop for Government Charter Services?
            </h1>
            <div className="space-y-6 text-[#6F7174] text-lg  pb-12 border-b">
              <p>
                Our team of professional drivers and support staff are
                extensively trained in secure and safe transportation practices.
                They have been screened and vetted for security clearances,
                ensuring the necessary trust and reliability in our services.
                Our drivers are all established in their local area, so they are
                adept at navigating complex routes, and maintaining punctuality
                while prioritizing safety.
              </p>
            </div>
          </div>
          <div className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Comfort During Demanding Journeys
            </h1>
            <p>
              In our commitment to excellence, we also pay special attention to
              comfort. We recognize that the demanding duties of government
              officials often involve long hours and arduous journeys.
              Therefore, with our government charter service, we ensure our
              vehicles are not only secure and reliable but also provide a
              comfortable and restful environment. Our range of high-end
              vehicles is equipped with comfortable seating, climate control,
              and other amenities, ensuring your travel is as stress-free as
              possible.
            </p>
          </div>
          <div className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Anywhere, Any Time Travel Management
            </h1>
            <p>
              We pride ourselves on the strong relationships we&lsquo;ve built
              with our government clientele over the years—our team values the
              trust placed in us and strives to reciprocate with exceptional
              service. With every trip we manage and deliver, we aim to build
              upon this foundation of trust and partnership.
            </p>
          </div>
          <div className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Journeys You Can Track
            </h1>
            <p>
              Swoop is a centralized booking system where you can track your
              trips, amend your details to make sure everyone is transported to
              and from where they need, and manage every detail in one place.
              This not only gives you the complete visibility you need but
              allows you to streamline future journeys, allowing you to work
              within your budget every time.
            </p>
          </div>
          <div className="w-full sm:h-[328px] relative overflow-hidden rounded-2xl">
            <Image
              src="/governor-1.png"
              alt="detail"
              fill
              priority
              className="object-cover absolute"
            />
          </div>
          <div className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Duty of Care and Risk Management
            </h1>
            <p>
              Our charter services aim to set the gold standard in government
              transportation – we take extra steps to monitor any travel issues
              to provide you with real-time alerts and emergency assistance.
              Together, we can enhance operational efficiency and contribute to
              the nation&lsquo;s welfare.
            </p>
          </div>
          <div className="mt-11 border-b pb-11 flex flex-col space-y-6 my-6">
            <h1 className="font-semibold text-xl sm:text-[28px] sm:leading-[36px]">
              Be a Local Business Advocate
            </h1>
            <p>
              When you use Swoop’s sports transportation services, you also
              support small, local business owners in your local area. We think
              it paramount that, as a national and global organization, we
              champion small business owners all over the world.
            </p>
            <p>
              For government charter services, we painstakingly select the best
              network of local drivers who are
            </p>
            <ul className="list-disc list-inside">
              <li>Established small business owners</li>
              <li>Background checked and fully insured</li>
              <li>People who care about providing an impeccable service</li>
              <li>
                Equipped with Swoop technology to provide a 5-star experience
              </li>
            </ul>
          </div>
          <Button
            variant={"default"}
            className="cursor-pointer rounded-full font-semibold text-gray-900 flex items-center gap-2 mt-6 w-fit sm:mt-10 sm:mb-[48px]"
            //onClick={() => {}}
          >
            Experience a new standard
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="container px-4 sm:px-20 w-full sm:max-w-[1022px] mx-auto flex flex-col">
        <h1 className="font-semibold text-xl sm:text-2xl mb-6">
          Explore our most popular cities
        </h1>
        <p>
          Working with you is more than just a quick transaction to us. Our
          dedicated and experienced team always makes sure that we tailor
          exactly to your specific needs.
        </p>
      </div>
      <div className="mt-20">
        <PopularCitiesCarousel />
      </div>
      <TechCommLogos />
      <BetterTogetherComponent />
    </div>
  );
};

export default GovernmentsComponent;
