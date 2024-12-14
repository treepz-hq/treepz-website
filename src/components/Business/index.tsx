'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import CheckedIcon from "@/assets/icons/Checked-icon";
import PostalCard from "../Feature/card";
import { BusinessSolutionsData, ProsData, ConsData, BookingPros, BookingCros } from "@/lib/dummyData";
import { useModal } from "@/contexts/ModalContext";
import GotPower from "./got-the-power"

const ListOne = ["Representatives are available 24/7 to assist with the planning process", "Our cars come to any pick-up point or destination, including airports, hotels, resorts, theme parks, and more", "We cater to any type of special event, from weddings to school trips, sports games, or conferences"];

const ListTwo = ["Luxury sedans", "Luxury vans", "SUVs", "Mini-buses","Mini-buses"]

const BusinessSolutionComponent = () => {
  const router = useRouter();
   const { showModal } = useModal();

  return (
    <>
      <div className="sm:bg-[url(/Treep.png)] bg-no-repeat sm:h-[704px] bg-contain bg-right">
        <div className="mt-32 w-full sm:w-[720px] sm:pl-20">
          <h1 className="text-[32px] sm:text-[48px] text-center sm:text-left font-bold leading-[40px] sm:leading-[64px] uppercase text-[#212529] mb-6">
            Move Together,
            <br /> Effortlessly: Choose
            <br /> Treepz
          </h1>
          <p className="text-xl w-full text-[#4D5154] sm:mb-[56px]">
            At Treepz, we believe every group is unique, and their
            transportation needs deserve the same. That&lsquo;s why we offer
            best-in-class services meticulously crafted to accommodate diverse
            requirements and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant={"default"}
              className="relative overflow-hidden sm:w-[194px] sm:h-[64px] group"
              onClick={showModal}
            >
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:transform group-hover:-translate-y-full">
                For business use
              </span>
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0">
                For business use
              </span>
            </Button>

            <Button
              variant={"outline"}
              className="relative sm:w-[194px] sm:h-[64px] group overflow-hidden"
              onClick={showModal}
            >
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:transform group-hover:-translate-y-full">
                For personal use
              </span>
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0">
                For personal use
              </span>
            </Button>
          </div>
        </div>
        <div className="sm:hidden h-[322px] w-full relative bg-right">
          <Image
            src="/Treep.png"
            alt="about"
            fill
            sizes="100vw"
            priority
            className="bg-right absolute"
          />
        </div>
      </div>
      {/* Remaining JSX */}
      <div className="w-full sm:mt-[92px] container px-4 sm:px-20">
        <h1 className="mb-6 text-[32px] leading-[40px] font-bold">
          GROUND TRANSPORTATION SOLUTIONS
        </h1>
        <p className="text-[#4D5154] w-full sm:w-[1022px]">
          Our transportation services expand far and wide for any need. Whether
          you&lsquo;re a planner, need support getting to school or work, or
          transporting to an appointment, Treepz has you covered.
        </p>
        {/* solutions */}
        <div className="flex flex-col sm:flex-row w-full mt-10 gap-4 sm:flex-wrap">
          {BusinessSolutionsData.map((item: any, index: number) => (
            <PostalCard
              src={item.src}
              title={item.title}
              index={index + 1}
              href={item.href}
              key={index}
            />
          ))}
          <div className="flex flex-col w-full sm:w-[408px] sm:h-[380px] rounded-2xl bg-[#1E1E1E] relative justify-center items-center">
            <div className="absolute flex flex-col w-[356px] text-center  text-white">
              <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] font-extrabold">
                Custom Solutions Available
              </h1>
              <p className="sm:mt-4 sm:mb-11 text-lg sm:text-xl">
                Looking for more customized transportation solutions and want to
                chat with an expert?
              </p>
              <Button
                variant={"default"}
                className="relative overflow-hidden sm:w-[194px] mx-auto h-[40px] group justify-center items-center"
                onClick={showModal}
              >
                <span className="absolute top-0 left-0 w-full h-[20px] flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:-translate-y-full bg-red-400 ">
                  Contact Us
                </span>
                <span className="absolute top-0 left-0 w-full h-[20px] flex items-center justify-center transition-transform duration-700 ease-in-out transform translate-y-[40px] group-hover:translate-y-0">
                  Contact Us
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[52px] mt-10 relative">
        <Image
          src="/blue-blur-rect.png"
          fill
          priority
          sizes="100vw"
          className="absolute object-fill"
          alt="rect"
        />
      </div>

      <div className="bg-[#FDF2D0] w-full">
        <div className="container px-4 sm:px-20 flex justify-between flex-col">
          <div className="sm:mt-44 w-full sm:w-[763px] space-y-6">
            <h1 className="uppercase sm:text-[32px] leading-[40px] font-bold">
              Meet Our Diverse Vehicles
            </h1>
            <p className="text-lg sm:text-xl text-[#4D5154]">
              Treepz has an array of vehicles that range from luxurious sedans
              to spacious shuttle buses and sleek charter buses.
            </p>
          </div>
          <div className="py-4 sm:py-[120px] flex flex-col sm:flex-row w-full gap-14">
            <div className="flex flex-col space-y-6 sm:w-[600px]">
              <h1 className="capitalize text-2xl font-bold">
                Other ways Treepz will get you ahead of the game
              </h1>
              <p className="text-[#4D5154] text-lg sm:text-xl">
                Treepz has an array of vehicles that range from luxurious sedans
                to spacious shuttle buses and sleek charter buses. With features
                such as storage space, reclining seats, Wi-Fi access, and
                onboard bathrooms available in the service&lsquo;s shuttles,
                passengers can comfortably enjoy their trip without worrying
                about when the next comfort stop will be.
              </p>
              <ul className="list-outside">
                {ListOne.map((datum) => (
                  <li
                    key={datum}
                    className="flex items-center gap-4 my-4 text-lg sm:text-xl font-medium"
                  >
                    <span>
                      <CheckedIcon fill="#FA6533" />
                    </span>{" "}
                    {datum}{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col space-y-6 sm:w-[600px]">
              <h1 className="capitalize text-2xl font-bold">
                No two events are the same, as are no two groups of people.
              </h1>
              <p className="text-[#4D5154] text-lg sm:text-xl">
                Treepz’s impressive fleet allows you to travel comfortably with
                ample storage space and technological amenities where you need
                them the most. Choose from vehicles like:
              </p>
              <ul className="list-outside">
                {ListTwo.map((datum) => (
                  <li
                    key={datum}
                    className="flex items-center gap-4 my-4 text-lg sm:text-xl font-medium"
                  >
                    <span>
                      <CheckedIcon fill="#FA6533" />
                    </span>{" "}
                    {datum}{" "}
                  </li>
                ))}
              </ul>
              <p className="text-[#4D5154] text-lg sm:text-xl">
                You have the ability to unlock the perfect solution for your
                requirements, be it a corporate occasion, a momentous event, or
                even just a leisurely day out. With our vast fleet, every
                journey is smooth and perfectly executed.
              </p>
            </div>
          </div>
        </div>
        {/* <Testimony /> */}
      </div>
      <div className="container px-4 sm:px-20 mx-auto sm:my-[167px]">
        <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] font-bold mb-10 sm:mb-[88px]">
          The Gold Standard of Group Transportation
        </h1>
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-10">
          <div className="relative w-full sm:w-[624px] h-fit sm:h-[552px]">
            <Image
              src="/treepz-square.png"
              fill
              priority
              sizes="100vw"
              className="absolute object-fill"
              alt="treepz-square"
            />
          </div>
          <div className="w-full sm:w-[516px] flex flex-col space-y-6">
            <h2 className="capitalize font-bold text-xl sm:text-2xl">
              Treepz’s group transportation services prioritize exceptional
              customer service, providing you and all your passengers with the
              most suitable vehicles and comfortable experiences for your group
              outings.
            </h2>
            <p className="text-lg sm:text-xl text-[#4D5154]">
              Your dedicated travel coordinator will take care of any concerns,
              changes, or cancellations in a timely and friendly manner – and
              they’ll help you to become the captain of your own destiny too,
              giving you guidance on how to navigate through bookings in our
              unique Treepz app. And it is not just at the start of the process
              that you get amazing customer service. Our thoroughly vetted and
              established, professional drivers also guarantee customer
              satisfaction in each ride.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FEF0EB] py-10 sm:py-[91px]">
        <div className="container px-4 sm:px-20 mx-auto sm:mt-[67px]">
          <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-10 border-b sm:pb-11">
            <div className="w-full sm:w-[516px] flex flex-col space-y-6">
              <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] font-bold">
                Shouldn’t I Arrange Group Transportation Myself?
              </h1>
              <h2 className="capitalize font-bold text-xl sm:text-2xl">
                So, you’ve been tasked with arranging group transportation for a
                series of work events or a year’s worth of community outings.
              </h2>
              <p className="text-lg sm:text-xl text-[#4D5154]">
                You could organize everything yourse And the former option might
                sound appealing – why go through a third party when you can just
                do it yourself? lf or you could book through a private
                transportation provider. And the former option might sound
                appealing – why go through a third party when you can just do it
                yourself? Let’s look at the pros and cons of each method.
              </p>
            </div>
            <div className="relative w-full sm:w-[624px] h-fit sm:h-[552px]">
              <Image
                src="/treepz-arrange.png"
                fill
                priority
                sizes="100vw"
                className="absolute object-fill"
                alt="treepz-square"
              />
            </div>
          </div>
          <div className="mt-10 sm:mt-20">
            <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] font-bold mb-5 sm:mb-14">
              Booking through a Private Transportation Provider
            </h1>
            <div className="w-full flex justify-between gap-5 items-center">
              <div className="bg-white w-full sm:w-[616px] h-fit sm:h-[732px] p-4 sm:p-8 rounded-3xl">
                <p className="text-xl sm:text-2xl text-[#231F20] font-medium mb-2 sm:mb-4">
                  Pros
                </p>
                {ProsData.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-3">
                    <span>
                      <CheckedIcon />
                    </span>
                    <div className="flex flex-col text-lg sm:text-xl space-y-3">
                      <p className="text-[#231F20] font-medium">{item.title}</p>
                      <span className="text-[#6F7174]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white w-full sm:w-[616px] h-fit sm:h-[732px] p-4 sm:p-8 rounded-3xl">
                <p className="text-xl sm:text-2xl text-[#231F20] font-medium mb-2 sm:mb-4">
                  Cons
                </p>
                {ConsData.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-3">
                    <span>
                      <CheckedIcon fill="#D5404C" />
                    </span>
                    <div className="flex flex-col text-lg sm:text-xl space-y-3">
                      <p className="text-[#231F20] font-medium">{item.title}</p>
                      <span className="text-[#6F7174]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-20">
            <h1 className="text-2xl sm:text-[32px] sm:leading-[40px] font-bold mb-5 sm:mb-14">
              Booking Your Own Group Transportation
            </h1>
            <div className="w-full flex justify-between gap-5 items-center">
              <div className="bg-white w-full sm:w-[616px] h-fit sm:h-[492px] p-4 sm:p-8 rounded-3xl">
                <p className="text-xl sm:text-2xl text-[#231F20] font-medium mb-2 sm:mb-4">
                  Pros
                </p>
                {BookingPros.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-3">
                    <span>
                      <CheckedIcon />
                    </span>
                    <div className="flex flex-col text-lg sm:text-xl space-y-3">
                      <p className="text-[#231F20] font-medium">{item.title}</p>
                      <span className="text-[#6F7174]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white w-full sm:w-[616px] h-fit sm:h-[492px] p-4 sm:p-8 rounded-3xl">
                <p className="text-xl sm:text-2xl text-[#231F20] font-medium mb-2 sm:mb-4">
                  Cons
                </p>
                {BookingCros.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-3">
                    <span>
                      <CheckedIcon fill="#D5404C" />
                    </span>
                    <div className="flex flex-col text-lg sm:text-xl space-y-3">
                      <p className="text-[#231F20] font-medium">{item.title}</p>
                      <span className="text-[#6F7174]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:mt-[205px] w-full sm:max-w-[816px] mx-auto sm:h-[252px] h-fit justify-center items-center flex flex-col">
            <h1 className="text-2xl sm:text-[32px] leading-[40px] text-[#212529] mb-6 font-bold">
              In short
            </h1>
            <p className="text-[#4D5154] text-lg sm:text-xl sm:mb-10">
              While self-booking has its advantages in terms of cost control and
              independence, high-quality private transportation providers like
              Treepz offer a more comprehensive and hassle-free solution with
              experienced drivers, flexible options, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant={"default"}
                className="relative overflow-hidden sm:w-[249px] sm:h-[64px] text-center items-center sm:px-[17px] group"
                onClick={() => router.push("/business-solutions")}
              >
                <p className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                  Explore our group solutions
                </p>
                <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                  Explore our group solutions
                </span>
              </Button>
              <Button
                variant={"outline"}
                className="relative sm:w-[156px] sm:h-[64px] group overflow-hidden"
                onClick={showModal}
              >
                <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center group-hover:transform group-hover:-translate-y-full">
                  For Personal Use
                </span>
                <span className="transition-transform duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center transform translate-y-full group-hover:translate-y-0">
                  For Personal Use
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <GotPower />
    </>
  );
};

export default BusinessSolutionComponent;
