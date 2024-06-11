import Image from 'next/image'

interface RoutesProps {
    title: string;
    desc?: string;
    mainSrc?: string
}

const UserRoutesComponent: React.FC<RoutesProps> = ({ title, desc, mainSrc = "bus-route.png" }) => {
    return (
        <div className="bg-[#FDF2D0] w-full">
        <div className="px-4 sm:pl-20 sm:pr-0 flex justify-between flex-col sm:flex-row">
          <div className="py-4 sm:py-[120px] flex flex-col w-full sm:w-[645px]">
            <h1 className="text-2xl font-bold mb-2 sm:mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl w-full sm:w-[550px] text-[#4D5154]">
              {desc}
            </p>

            <div className="w-[600px] h-[120px] mt-[20px] sm:mt-[89px] relative">
              <Image
                src="/google-rating.png"
                alt="google rating"
                fill
                sizes="100vw, 100vh"
                priority
                className="absolute object-contain"
              />
            </div>
          </div>
          <div className="w-full sm:w-[650px] h-[400px] sm:h-[670px] relative ">
            <Image
              src={`/${mainSrc}`}
              alt="Bus routing"
              fill
              sizes="100vw, 100vh"
              priority
              className="absolute object-contain sm:object-cover"
            />
          </div>
        </div>
      </div>
    )
}

export default UserRoutesComponent
