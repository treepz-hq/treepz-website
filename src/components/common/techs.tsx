import React from "react";
import Image from "next/image";
import Link from "next/link";
const TechCommLogos = () => {
  return (
    <div className='my-[20px] sm:my-[176px] '>
<h1 className="text-center text-[20px] mb-8">WHAT THE MEDIA SAYS ABOUT US</h1>
      <div className="w-full sm:w-[864px] px-4 flex-wrap mx-auto gap-4 flex justify-between items-center">
                <Link  target="_blank" href="https://techcrunch.com/2021/11/22/nigerian-maas-startup-treepz-closes-2-8m-seed-round-to-fund-east-african-expansion/">


                    <Image
                        src="/techs/techcrunch.png"
                        alt="tech crunch"
                        width={66}
                        height={32}
                    />

                </Link>
                <Link target="_blank" href='https://techeconomy.ng/tag/treepz/'>

                    <Image
                        src="/techs/techeconomy.png"
                        alt="tech Economy"
                        width={237}
                        height={32}
                    />
                </Link>
                <Link target="_blank" href='https://techcabal.com/tag/treepz/'>

                    <Image
                        src="/techs/TechCabal.png"
                        alt="tech cabal"
                        width={40.1}
                        height={40}
                    />
                </Link>
                <Link target="_blank" href='https://techbuild.africa/treepz-4-million-passengers-destination-endless/'>

                    <Image
                        src="/techs/treepz-build.png"
                        alt="treepz build"
                        width={107.1}
                        height={40}
                    />

                </Link>
                <Link target="_blank" href='https://techpoint.africa/2023/02/14/treepz-launches-in-kenya/'>

                    <Image
                        src="/techs/Techpoint.png"
                        alt="treepz point"
                        width={133.1}
                        height={40}
                    />
                </Link>
                <Link target="_blank" href='https://disrupt-africa.com/2023/10/17/nigerias-treepz-octamile-partner-to-launch-insurance-program-for-travellers-hosts/'>

                    <Image
                        src="/techs/disrupt-icon.png"
                        alt="Disrupt"
                        width={80.5}
                        height={40}
                    />
                </Link>
      </div>
    </div>
  );
};

export default TechCommLogos;
