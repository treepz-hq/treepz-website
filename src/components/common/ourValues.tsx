import Image from 'next/image'

const OurValues = () => {
    return (
        <div className="w-full sm:max-w-[1335px] bg-[#F7F7F7] sm:mt-[228px] mr-[120px] sm:pr-20">
            <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-20 ">
                <div className="flex justify-between flex-col w-full sm:w-[470px]">
                    <h1 className="text-2xl sm:text-[32px] font-bold uppercase sm:leading-[40px] text-[#212529] w-full sm:pl-20">Our Values</h1>
                    <div className="relative w-full sm:w-[470px] h-[352px] hidden sm:inline-block">
                        <Image src="/value-bg.png" alt="Value" fill sizes='100vw' priority className='absolute object-contain' />
                    </div>
                </div>
                <div className="w-full sm:w-[715px] flex flex-col sm:flex-row gap-[75px] sm:mb-[90px]">
                    <div className="flex-1">
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">Humility</h1>
                            <p className="text-base text-[#6F7174] mt-3">In achieving success, we can never underestimate the value of each person. Therefore, to each one, we accord Respect and Humility.</p>
                        </div>
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">Have fun</h1>
                            <p className="text-base text-[#6F7174] mt-3">All work and no play will not only make us dull but will dampen our creative talents. Having fun allows us to be flexible and creates an enabling environment where we can exhale.</p>
                        </div>
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">People-smart</h1>
                            <p className="text-base text-[#6F7174] mt-3">We have Interpersonal intelligence and are constantly seeking to improve our relationships with our customers and colleagues.</p>
                        </div>
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">Speed</h1>
                            <p className="text-base text-[#6F7174] mt-3">Speed is central to everything we are and everything we do; we are quick in creating and implementing innovative solutions, being fast in our time-responsiveness to our clients demands.</p>
                        </div>
                       
                    </div>
                    <div className="flex-1">
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">Hunger</h1>
                            <p className="text-base text-[#6F7174] mt-3">We must be seen as people who are constantly and consistently thinking out of the box and re-inventing themselves by making today&lsquo;s achievements the starting point for our success stories for tomorrow.</p>
                        </div>
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">Integrity</h1>
                            <p className="text-base text-[#6F7174] mt-3">We do not only comply with regulations, good business practices and ethical standards, but we also are honest, reliable, and trustworthy people.</p>
                        </div>
                        <div className="w-full sm:w-[320px] mb-5 sm:mb-10">
                            <h1 className="font-medium text-xl text-[#212529]">Excellence</h1>
                            <p className="text-base text-[#6F7174] mt-3">Excellence for us, is not just a watchword, it&lsquo;s an intrinsic habit. it&lsquo;s the default mode for all our operational standards so that mediocrity and half measures become alien to our culture.</p>
                        </div>           
                    </div>
                </div>
                <div className="relative w-full h-[260px] sm:hidden">
                        <Image src="/value-bg.png" alt="Value" fill sizes="100vw" priority className='absolute object-contain' />
                    </div>
            </div>
        </div>
    )
}


export default OurValues
