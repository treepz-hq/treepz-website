import Image from 'next/image'
import ChevronRightWhiteIcon from '@/assets/svgs/chervon-right-white-nav.svg'
import ArrowRightWhiteIcon from '@/assets/svgs/arrow-right-white-line.svg'

const MediaComponent  = () => {
    return (
      <div className="bg-[#312604] w-full py-[88px] mt-[88px]">
        <div className="conatiner px-4 sm:px-20">
          <h1 className="text-white text-base font-semibold mb-8 uppercase">
            Media
          </h1>
          <div className="flex sm:gap-24 w-full flex-col sm:flex-row">
            <div className="w-full sm:w-[700px] h-[400px] relative overflow-hidden rounded-2xl">
              <Image
                src="/media-large.png"
                fill
                priority
                className="object-fill sm:object-contain absolute"
                alt="media"
              />
              <div className="absolute bottom-8 ml-9 text-white flex flex-col space-y-2">
                <h1>Moving in the heart of Africa</h1>
                <div className="flex gap-4 items-center justify-between w-fit">
                  <p>Watch the video</p>
                  <ChevronRightWhiteIcon />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[511px] h-fit sm:h-[112px] flex  flex-col justify-between gap-4 items-center mt-4">
              <div className="flex flex-col items-center justify-between gap-4 sm:gap-8">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="mb-5 sm:mb-0 flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-[200px] h-[140px] sm:h-[112px] relative flex justify-center items-center rounded-2xl overflow-hidden">
                            <Image
                                src="/media-small.png"
                                fill
                                priority
                                className="object-cover absolute"
                                alt="media"
                            />
                            <div className="w-5 h-5 cursor-pointer relative">
                                <Image
                                src="/play-media.png"
                                fill
                                priority
                                className="object-contain absolute"
                                alt="media"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-[291px] text-white text-base font-medium mt-4">
                        Follow our journey as we bring put Africa’s 26 million cars to better use.
                        </div>
                    </div>
                    ))}
                </div>
            </div>
          </div>
          <div className="mt-24 sm:mt-[128px] w-full flex flex-col text-white">
            <h1 className="text-base font-semibold">
              EXPLORE OUR BUSINESS SOLUTIONS
            </h1>
            <div className="mt-[56px] w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="rounded-2xl p-6 border-2 border-white/80 w-full sm:w-[548px] justify-between bg-[#423409]">
                <div>
                  <h1 className="text-white text-2xl font-semibold capitalize mb-3">
                    For Businesses
                  </h1>
                  <p>
                    Improve your employees productivity through employee commute
                  </p>
                </div>
                <div className="w-full sm:w-[116px] font-medium flex justify-between mt-10">
                  <p>Learn more</p>
                  <ArrowRightWhiteIcon />
                </div>
              </div>
              <div className="rounded-2xl p-6 border-2 border-white/80 w-full sm:w-[548px] justify-between bg-[#423409]">
                <div>
                  <h1 className="text-white text-2xl font-semibold capitalize mb-3">
                    Car rentals
                  </h1>
                  <p>
                    Improve your employees productivity through employee commute
                  </p>
                </div>
                <div className="w-full sm:w-[116px] font-medium flex justify-between mt-10">
                  <p>Learn more</p>
                  <ArrowRightWhiteIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MediaComponent
