import Image from 'next/image';
import React from 'react';
import img from '@/public/images/img2.jpg';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center overflow-hidden">
      <Image
        src={img}
        alt="Website logo of a purple sphere"
        className="object-cover h-[100vh]"
      />
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
  );
}

export default Hero;
