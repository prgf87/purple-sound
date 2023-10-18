import Image from 'next/image';
import React from 'react';
// import videoBg from '@/public/video/';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <div className="h-[100vh] relative left-0 top-0 right-0 bottom-0 flex justify-center items-center overflow-hidden">
        <video
          muted
          playsInline
          autoPlay
          loop
          className="object-cover w-[100vw]"
        >
          <source src="/video/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/70" />
        <div className="absolute flex">
          <h1 className="text-7xl">Purple Sound</h1>

          <h2 className="text-xs pt-1 uppercase">Company</h2>
        </div>
        <p></p>
        <Link href="/contact" className="btn absolute bottom-20">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Hero;
