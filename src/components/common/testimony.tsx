import Image from 'next/image'
import ArrowLeftIcon from '@/assets/svgs/arrow-left-line.svg'
import ArrowRightIcon from '@/assets/svgs/arrow-right-line.svg'

const Testimony = () => {
    return (
      <div className="flex w-full justify-between h-[620px] items-center mt-14 flex-col sm:flex-row">
        <div className="w-full sm:w-[640px] h-[671px] relative overflow-hidden">
          <Image
            src="/testimony-hero.png"
            alt="testimony"
            fill
            priority
            className="object-cover sm:object-contain absolute"
          />
        </div>
        <div className="bg-[#FDF2D0] sm:py-[106px] sm:px-[120px] w-full sm:w-[872px]">
          <div className="flex justify-between items-center px-4 sm:px-0 py-8 sm:py-0">
            <span className="border border-gray-900 rounded-full">
              <ArrowLeftIcon />
            </span>
            <div className="w-full sm:w-[162px] h-14 relative">
              <Image
                alt="elevation"
                src="/trusted/Eleveation-Church-logo.png"
                fill
                priority
                className="object-contain absolute"
              />
            </div>
            <span className="border border-gray-900 rounded-full">
              <ArrowRightIcon />
            </span>
          </div>
          <div className="text-center text-xl sm:text-2xl font-medium mt-2 sm:mt-14 px-4">
            &quot;For Twitter, the most important thing when producing events is
            to trust our vendors, and Treepz delivered. I didn&lsquo;t have one
            worry knowing Treepz was on the ground to support Twitter and our
            200+ person event.&quot;
          </div>
          <div className="flex flex-col mt-6 w-full sm:w-[185px] h-12 text-center text- mb-14 mx-auto">
            Pastor Godman,{" "}
            <span className="font-semibold">Pastor, Elevation Church</span>
          </div>
          <div className="flex justify-between items-center mb-4 sm:mb-0 w-[50px] mx-auto">
            <span className="w-[12px] h-[12px] rounded-full bg-[#212529]"></span>
            <span className="w-[12px] h-[12px] rounded-full bg-[#212529]/60"></span>
            <span className="w-[12px] h-[12px] rounded-full bg-[#212529]/60"></span>
          </div>
        </div>
      </div>
    );
}

export default Testimony;