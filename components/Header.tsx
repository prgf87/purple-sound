import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { CldImage } from 'next-cloudinary';

type Props = {};

function Header({}: Props) {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#B5E2FA');

  if (typeof document !== 'undefined') {
    const body = document.querySelector('body');
    if (nav === true) {
      body!.style.overflow = 'hidden';
    } else {
      body!.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#33294A');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#B5E2FA');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div>
      <div
        style={{ backgroundColor: `${color}`, color: `${textColor}` }}
        className="flex justify-between items-center py-4 px-10 ease-in-out duration-300"
      >
        <Link
          href={'/'}
          className="border-2 border-gray-300/10 rounded-full hover:border-gray-300/20 active:border-gray-300/40"
        >
          <CldImage
            src="https://res.cloudinary.com/dzitj9wug/image/upload/v1701065833/PurpleSoundCo/Images/img1_zzcl5g.png"
            width={50}
            height={50}
            sizes="5w"
            alt="/"
            className="object-cover h-10 w-10 rounded-full"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="flex space-x-5">
            <li className="header-link">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="header-link">
              <Link href={'/#services'}>Services </Link>
            </li>
            <li className="header-link">
              <Link href={'/#process'}>Our Process </Link>
            </li>
            <li className="header-link">
              <Link href={'/#contact'}>Contact </Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
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
              className="w-6 h-6"
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
        className={`absolute top-0 right-0 bg-black ${
          nav
            ? 'overscroll-none fixed right-0 opacity-100 h-screen w-screen ease-out'
            : 'fixed right-[-105%] top-0 w-10 opacity-50'
        } transition-all ease-out duration-500`}
      >
        <div className="text-white flex justify-center items-stretch mt-80 text-center">
          <div className="absolute top-20">
            <Link
              href={'/'}
              onClick={() => setNav(!nav)}
              className="border-2 border-gray-300/10 rounded-full hover:border-gray-300/20 active:border-gray-300/40"
            >
              <CldImage
                src="https://res.cloudinary.com/dzitj9wug/image/upload/v1701065833/PurpleSoundCo/Images/img1_zzcl5g.png"
                width={50}
                height={50}
                sizes="5w"
                alt="/"
                className="object-cover h-16 w-16 rounded-full"
              />
            </Link>
          </div>
          <ul className="space-y-5">
            <li className="nav-link">
              <Link href={'/'} onClick={() => setNav(!nav)}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link href={'/#services'} onClick={() => setNav(!nav)}>
                Services{' '}
              </Link>
            </li>
            <li className="nav-link">
              <Link href={'/#process'} onClick={() => setNav(!nav)}>
                Our Process{' '}
              </Link>
            </li>
            <li className="nav-link">
              <Link href={'/#contact'} onClick={() => setNav(!nav)}>
                Contact{' '}
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-[20vh] sm:mt[30vh]">
          <Footer nav={nav} setNav={setNav} />
        </div>
      </div>
    </div>
  );
}

export default Header;
