import React from 'react';
import ContactButton from './ContactButton';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <div className="h-[100vh] w-[100vw] relative left-0 top-0 right-0 bottom-0 flex justify-center items-center overflow-hidden">
        <video
          muted
          playsInline
          autoPlay
          loop
          className="object-cover h-[100vh] scale-125"
        >
          <source src="/video/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/70" />
        <div className="absolute flex">
          <h1 className="text-7xl">Purple Sound</h1>

          <h2 className="text-xs pt-1 uppercase">Company</h2>
        </div>
        <p></p>
        <ContactButton />
        <Link
          href={'#intro'}
          className="absolute bottom-2 animate-bounce text-white"
        >
          <SlArrowDown />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
