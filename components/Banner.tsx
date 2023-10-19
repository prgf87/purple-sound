import React from 'react';

type Props = { customBg: string; heading: string };

function Banner({ customBg, heading }: Props) {
  return (
    <div
      className={`${customBg} h-[40vh] z-0 flex justify-center items-center`}
    >
      <div className="w-full bg-[#33294A]/50 z-[2] h-full" />
      <h1 className="absolute text-white text-7xl z-10">{heading}</h1>
    </div>
  );
}

export default Banner;
