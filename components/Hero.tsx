import React from 'react';
import ContactButton from './ContactButton';
import { SlArrowDown } from 'react-icons/sl';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="left-0 top-0 right-0 bottom-0 h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden z-0">
      <video
        muted
        playsInline
        autoPlay
        loop
        className="object-cover h-[100vh] w-[100vw]  overflow-hidden"
      >
        <source src="/video/bgvideo-comp.mp4" type="video/mp4" />
      </video>
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/70 z-0" />
      <div className="absolute flex">
        <h1 className="text-7xl z-[2]">Purple Sound</h1>

        <h2 className="text-xs pt-1 uppercase z-[2]">Company</h2>
      </div>

      <ContactButton />
      <Link
        href={'/#services'}
        className="absolute bottom-4 animate-ping text-white"
      >
        <SlArrowDown className="animate-bounce" />
      </Link>
    </div>
  );
}

export default Hero;
