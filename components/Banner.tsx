import React from 'react';
import ContactButton from './ContactButton';
import { CldImage } from 'next-cloudinary';

type Props = { customBg: string; heading: string; message: string };

function Banner({ customBg, heading, message }: Props) {
  return (
    <div
      className={`${customBg} h-[60vh] z-0 flex justify-center items-center`}
    >
      <div className="w-full bg-[#33294A] opacity-40 z-0 h-full " />
      <div className="absolute z-[1] grid mx-auto max-w-5xl">
        <h1 className="text-white text-5xl sm:text-7xl text-center drop-shadow-2xl pb-10">
          {heading}
        </h1>
        <div className="px-4 sm:px-28">
          <p className="text-white font-bold text-xl sm:text-3xl text-center tracking-tighter">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
