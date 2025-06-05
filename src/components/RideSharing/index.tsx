import React from "react";
import Image from 'next/image';

const RideSharingStats: React.FC = () => {
  return (
    <div className="w-full my-[5%]">
      {/* <div className="mt-10 w-full my-[10%]"> */}
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:gap-10 sm:items-start">
        {/* Text Section */}
        <div className="w-full sm:w-1/3 pt-10 sm:ml-[76px] px-4 sm:px-0">
          <p className="text-[#212529] font-semibold text-[29px] leading-[50px]">
            Despite the growth in Ride-sharing, Africa remains <span className="relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[9px] after:bg-[#F8B02B]">
              under-motorised</span> compared to global standards, with only <span className="relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[9px] after:bg-[#F8B02B]">
              44 vehicles </span> per 1,000 inhabitants.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-2/3 mt-6 sm:mt-0">
          <Image
            src="/sharingride.png"
            alt="Ride-sharing illustration"
            width={300}
            height={300}
            className="w-full h-[200px] sm:h-auto object-cover sm:object-center"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default RideSharingStats;


// import React from "react";
// import Image from 'next/image';

// const RideSharingStats: React.FC = () => {
//   return (
//     <div className="mt-10 w-full my-[20px]">
//       <div className="flex gap-5 items-center">
//         <div className="ml-[76px] w-1/3 pt-10">
//           <p className="text-[#212529] font-semibold text-[29px] leading-[50px]">Despite the growth in Ride-sharing, Africa remains under-motorised compared to global standards, with only 44 vehicles per 1,000 inhabitants.</p>
//         </div>
//         <div className="w-2/3">
//         <Image
//             src="/jointRide.png"
//             alt="Ride-sharing illustration"
//             width={200}
//             height={300}
//             className="w-full h-full"
//             unoptimized
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideSharingStats;



//   {/* <div className="w-auto flex flex-col md:flex-row items-center justify-between ml-30 gap-6">
//       <div className="w-full md:w-1/2 text-left md: order-1 md:order-none">
//         <h2 className="text-3xl font-semibold mb-4 text-[#212529]">
//         Despite the growth in Ride-sharing, Africa remains under-motorised compared to global standards, with only 44 vehicles per 1,000 inhabitants.
//         </h2>
//       </div>

//       <div className="w-full md:w-1/2 order-2 md:order-none overflow-hidden">
//         <div className="relative w-full h-64 md:h-[400px]">
//           <Image
//             src="/jointRide.png"
//             alt="Ride-sharing illustration"
//             width={200}
//             height={300}
//             className="w-full h-full"
//             unoptimized
//           />
//         </div>
//       </div>
//     </div> */}