import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

function Header({}: Props) {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#B5E2FA');

  const handleNav = () => {
    setNav(!nav);
  };

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
    <div
      style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      className="flex justify-between items-center py-4 px-10 ease-in-out duration-300"
    >
      {/* <div>Logo</div> */}
      <Link
        href={'/'}
        className="border-2 border-gray-300/10 rounded-full hover:border-gray-300/20 active:border-gray-300/40"
      >
        <Image
          src="/images/img1.png"
          width={50}
          height={50}
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
            <Link href={'/#testimonials'}>Testimonials </Link>
          </li>
          <li className="header-link">
            <Link href={'/#contact'}>Contact </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={textColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
  );
}

export default Header;
