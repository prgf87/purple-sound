import React from 'react';

type Props = {};

function Banner({}: Props) {
  return (
    <div className="custom-img h-[20vh] z-0 flex justify-center items-center">
      <div className="w-full bg-[#33294A]/40 z-[2] h-full" />
      <h1 className="absolute text-white text-7xl z-10">
        experience audio excellence
      </h1>
    </div>
  );
}

export default Banner;
