import Image from "next/image";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface IProps {
  src: string;
  title: string;
  index: number;
  href?: string;
}

const PostalCard: React.FC<IProps> = ({ src, title, index, href }) => {
  return (
    <Link href={href ? `/${href}` : "/"}>
      <div className="flex flex-col sm:grid sm:h-[380px] w-full overflow-hidden rounded-2xl group">
        <div className="w-full sm:w-[408px] h-[380px] relative overflow-hidden rounded-2xl transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-90">
          <Image
            src={`/postals/${src}`}
            alt={src}
            fill
            priority
            className="absolute object-cover"
          />
          <div
            className={clsx({
              "absolute flex flex-col space-y-3 left-0 right-0 bottom-5 w-[297px] ml-6 mb-5 sm:mb-10":
                true,
              "sm:w-[250px] bottom-0": [2, 3, 6].includes(index),
            })}
          >
            <span className="bg-white rounded-full flex justify-center items-center w-14 h-14 font-bold text-[32px]">
              {index}
            </span>
            <p className="mt-[20px] text-white font-extrabold text-xl sm:text-[28px] leading-[40px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostalCard;
