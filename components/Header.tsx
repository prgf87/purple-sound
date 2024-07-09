import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { CldImage } from "next-cloudinary";

type Props = {};

function Header({}: Props) {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#B5E2FA");

  if (typeof document !== "undefined") {
    const body = document.querySelector("body");
    if (nav === true) {
      body!.style.overflow = "hidden";
    } else {
      body!.style.overflow = "auto";
    }
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#33294A");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#B5E2FA");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div>
      <div
        style={{ backgroundColor: `${color}`, color: `${textColor}` }}
        className="flex items-center justify-between px-10 py-4 duration-300 ease-in-out"
      >
        <Link
          href={"/"}
          className="rounded-full border-2 border-gray-300/10 hover:border-gray-300/20 active:border-gray-300/40"
        >
          <CldImage
            src="PurpleSoundCo/Images/img1_zzcl5g"
            width={50}
            height={50}
            sizes="5w"
            alt="/"
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="flex space-x-5">
            <li className="header-link">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="header-link">
              <Link href={"/#services"}>Services </Link>
            </li>
            <li className="header-link">
              <Link href={"/#process"}>Our Process </Link>
            </li>
            <li className="header-link">
              <Link href={"/#contact"}>Contact </Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button
            className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={textColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      <div
        className={`absolute right-0 top-0 bg-black ${
          nav
            ? "fixed right-0 h-screen w-screen overscroll-none opacity-100 ease-out"
            : "fixed right-[-105%] top-0 w-10 opacity-50"
        } transition-all duration-500 ease-out`}
      >
        <div className="mt-80 flex items-stretch justify-center text-center text-white">
          <div className="absolute top-20">
            <Link
              href={"/"}
              onClick={() => setNav(!nav)}
              className="rounded-full border-2 border-gray-300/10 hover:border-gray-300/20 active:border-gray-300/40"
            >
              <CldImage
                src="PurpleSoundCo/Images/img1_zzcl5g"
                width={50}
                height={50}
                sizes="5w"
                alt="/"
                className="h-16 w-16 rounded-full object-cover"
              />
            </Link>
          </div>
          <ul className="space-y-5">
            <li className="nav-link">
              <Link href={"/"} onClick={() => setNav(!nav)}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link href={"/#services"} onClick={() => setNav(!nav)}>
                Services{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link href={"/#process"} onClick={() => setNav(!nav)}>
                Our Process{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link href={"/#contact"} onClick={() => setNav(!nav)}>
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:mt[30vh] mt-[20vh]">
          <Footer nav={nav} setNav={setNav} />
        </div>
      </div>
    </div>
  );
}

export default Header;
