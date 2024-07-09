import React from "react";
import ContactButton from "./ContactButton";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="bottom-0 left-0 right-0 top-0 z-0 flex h-[100vh] w-[100vw] items-center justify-center overflow-hidden">
      <div id="hero" className="absolute top-0" />

      <video
        muted
        playsInline
        autoPlay
        loop
        className="h-[100vh] w-[100vw] overflow-hidden object-cover"
      >
        <source src="https://res.cloudinary.com/dzitj9wug/video/upload/v1701065707/PurpleSoundCo/Video/bgvideo-comp_c9k2hn.mp4" />
      </video>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-black/70" />
      <div className="absolute flex">
        <h1 className="z-0 text-7xl">Purple Sound</h1>

        <h2 className="z-0 pt-1 text-xs uppercase">Company</h2>
      </div>

      <ContactButton />
      <Link
        href={"/#services"}
        className="absolute bottom-4 animate-ping text-white"
      >
        <SlArrowDown className="animate-bounce" />
      </Link>
    </div>
  );
}

export default Hero;
