import Image from 'next/image'
import ArrowLeftIcon from '@/assets/svgs/arrow-left-line.svg'
import ArrowRightIcon from '@/assets/svgs/arrow-right-line.svg'

const Testimony = () => {
    return (
      <div className="flex w-full justify-between h-[671px] items-center mt-14 flex-col sm:flex-row">
        <div className="w-full sm:w-[640px] h-[671px] relative overflow-hidden">
          <Image
            src="/testimony-hero.png"
            alt="testimony"
            fill
            priority
            className="object-cover absolute"
          />
        </div>
        <div className="bg-[#FDF2D0] w-full sm:w-[872px] sm:h-[671px] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center px-4 sm:px-0 py-8 sm:py-0">
            {/* <span className="border border-gray-900 rounded-full">
              <ArrowLeftIcon />
            </span> */}
            <div className="w-full sm:w-[162px] h-14 relative">
              <Image
                alt="elevation"
                src="/testimony/Techstars.png"
                fill
                sizes='100vw, 100vh'
                priority
                className="object-cover absolute"
              />
            </div>
            {/*  <span className="border border-gray-900 rounded-full">
              <ArrowRightIcon />
            </span> */}
          </div>
          <div className="text-center text-xl sm:text-2xl font-medium mt-2 sm:mt-14 px-4 w-full sm:w-[627px] mx-auto text-[#6F7174]">
            &quot;Treepz made our Techstars Lagos program unforgettable by
            providing top-notch transportation for our tech startup founders and
            CEOs. The buses were modern, clean, and the entire process was
            efficient. Treepz exceeded our expectations, and we look forward to
            future collaborations!&quot;
          </div>
          <div className="flex flex-col mt-8 w-full sm:w-[326px] h-12 text-center text- mb-14 mx-auto">
            Oluwadunni Fanibe,
            <span className="font-semibold">
              Techstars Lagos Program Manager
            </span>
          </div>
          {/*  <div className="flex justify-between items-center mb-4 sm:mb-0 w-[50px] mx-auto">
            <span className="w-[12px] h-[12px] rounded-full bg-[#212529]"></span>
            <span className="w-[12px] h-[12px] rounded-full bg-[#212529]/60"></span>
            <span className="w-[12px] h-[12px] rounded-full bg-[#212529]/60"></span>
          </div> */}
        </div>
      </div>
    );
}

export default Testimony;