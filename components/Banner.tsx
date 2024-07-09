import React from 'react';
import { CldImage } from 'next-cloudinary';

type Props = {
  customBg: string;
  heading: string;
  message: string;
  image: string;
};

function Banner({ heading, message, image }: Props) {
  return (
    <div className={`flex justify-center items-center`}>
      <CldImage
        alt={message}
        src={image}
        width="1920"
        height="1080"
        zoom="0.5"
        sizes="100w"
        className="h-[60vh] w-[100%] bg-[#33294A] opacity-40 object-cover"
      />
      <div className="absolute z-[1] grid mx-auto max-w-5xl">
        <h1 className="text-white text-5xl sm:text-7xl text-center drop-shadow-2xl pb-10">
          {heading}
        </h1>
        <div className="px-8 sm:px-28">
          <p className="text-white font-bold text-lg sm:text-3xl text-center">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
