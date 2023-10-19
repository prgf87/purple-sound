import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

function Header({}: Props) {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

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
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className="flex justify-between items-center py-6 px-10">
      {/* <div>Logo</div> */}
      <div className="border-2 border-gray-300/10 rounded-full hover:border-gray-300/20 active:border-gray-300/40">
        <Image
          src="/images/img1.png"
          width={50}
          height={50}
          alt="/"
          className="object-cover h-10 w-10 rounded-full"
        />
      </div>
      <div>
        <ul className="flex space-x-5">
          <li className="header-link">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="header-link">
            <Link href={'/services'}>Services </Link>
          </li>
          <li className="header-link">
            <Link href={'/testimonials'}>Testimonials </Link>
          </li>
          <li className="header-link">
            <Link href={'/contact'}>Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
