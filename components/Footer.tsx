import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

type Props = { nav: Boolean; setNav: Dispatch<SetStateAction<boolean>> };

function Footer({ nav, setNav }: Props) {
  return (
    <div className="py-20 border-t-2 flex justify-center items-center text-center bg-black/90">
      <div className="grid mx-auto">
        <Link
          href={'/#hero'}
          onClick={() => {
            if (nav) {
              setNav(!nav);
            }
          }}
        >
          <h1 className="text-5xl sm:text-7xl hover:text-slate-400">
            Purple Sound Company
          </h1>
        </Link>
        <p className="text-xl uppercase">
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
