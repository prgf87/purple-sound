import React from 'react';
import ContactButton from './ContactButton';

type Props = { customBg: string; heading: string; message: string };

function Banner({ customBg, heading, message }: Props) {
  return (
    <div
      className={`${customBg} h-[60vh] z-0 flex justify-center items-center`}
    >
      <div className="w-full bg-[#33294A]/70 z-[2] h-full " />
      <div className="absolute z-10 grid mx-auto">
        <h1 className="text-white text-7xl text-center drop-shadow-2xl pb-10">
          {heading}
        </h1>
        <div className="uppercase px-28">
          <h2 className="text-white text-3xl text-center tracking-tighter">
            {message}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
