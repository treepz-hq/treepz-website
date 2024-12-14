'use client'
import TimerIcon from '@/assets/svgs/timer.svg'
import { Button } from '../ui/button';
import { useModal } from '@/contexts/ModalContext';
const GetAQuote = () => {
    const { showModal } = useModal();
    return (
        <div className="bg-black">
        <div className="container px-4 sm:px-20 py-[50px] text-white flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[28px] sm:text-[40px] font-medium leading-[48px] text-white">
            Get a Free Quote Right Away
          </h1>
          <div className="flex w-full sm:w-[355px] items-center">
            <div className="flex gap-4 w-full">
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
              className="cursor-pointer rounded-full w-fit sm:w-[144px] text-gray-900 flex items-center ml-3 sm:ml-10"

                            onClick={showModal}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    )
}

export default GetAQuote
