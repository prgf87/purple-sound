import React from 'react';
import ContactButton from './ContactButton';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';
import { CldVideoPlayer } from 'next-cloudinary';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="left-0 top-0 right-0 bottom-0 h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden z-0">
      <div className="absolute left-0 top-0 right-0 bottom-0 object-cover h-[100vh] scale-125 overflow-hidden">
        <CldVideoPlayer
          src="https://res.cloudinary.com/dzitj9wug/video/upload/v1701065707/PurpleSoundCo/Video/bgvideo-comp_c9k2hn.mp4"
          autoPlay="true"
          //@ts-ignore
          autoplayMode="always"
          muted={true}
          loop={true}
          logo={false}
          playsinline={true}
          controls={false}
          // className="absolute left-0 top-0 right-0 bottom-0 object-cover scale-100"
        />
      </div>
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/70 z-0" />
      {/* <div className="absolute flex">
        <h1 className="text-7xl z-[2]">Purple Sound</h1>

        <h2 className="text-xs pt-1 uppercase z-[2]">Company</h2>
      </div> */}

      <ContactButton />
      <Link
        href={'/#services'}
        className="absolute bottom-4 animate-bounce animate-ping text-white"
      >
        <SlArrowDown />
      </Link>
    </div>
  );
}

export default Hero;
