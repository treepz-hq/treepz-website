import Link from 'next/link'
import ChevronRightIcon from '@/assets/svgs/chervon-right-nav.svg'


interface MiniStickyBarMenuProps {
    data: any
}

const MiniStickyBarMenu:React.FC<MiniStickyBarMenuProps> = ({ data }) => {
    return (
        <div className="md:flex flex-col p-2 w-full hidden sm:w-[352px] h-fit genShadow rounded-lg bg-white sticky top-16 sm:top-24 border border-[#E9EBEC]">
          <h1 className="text-sm text-[#6F7174] uppercase border-b p-2 w-full text-center">
            FILL ALL THE INFORMATION YOU NEED
          </h1>
          {data.map((info: any, index: number) => (
            <Link
              href={`#info-${index + 1}`}
              className="flex border-b last:border-none cursor-pointer text-gray-900 flex justify-between items-center p-4 hover:bg-[#FDF2D0]"
              key={index}
            >
              <span className="w-full sm:w-[290px] font-semibold">{info}</span>
              <ChevronRightIcon />
            </Link>
          ))}
        </div>
    )
}

export default MiniStickyBarMenu
