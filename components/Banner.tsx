import React from "react";
import { CldImage } from "next-cloudinary";

type Props = {
  customBg: string;
  heading: string;
  message: string;
  image: string;
};

function Banner({ heading, message, image }: Props) {
  return (
    <div className={`flex items-center justify-center`}>
      <CldImage
        alt={message}
        src={image}
        width="1920"
        height="1080"
        zoom="0.5"
        sizes="100w"
        className="h-[60vh] w-[100%] bg-[#33294A] object-cover opacity-40"
      />
      <div className="absolute z-[1] mx-auto grid max-w-5xl">
        <h1 className="pb-10 text-center text-5xl text-white drop-shadow-2xl sm:text-7xl">
          {heading}
        </h1>
        <div className="px-8 sm:px-28">
          <p className="text-center text-lg font-bold text-white sm:text-3xl">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
