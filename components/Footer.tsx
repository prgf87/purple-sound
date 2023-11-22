import Link from 'next/link';
import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="py-20 border-t-2 flex justify-center items-center text-center">
      <div className="grid mx-auto">
        <Link href={'/#hero'}>
          <h1 className="text-7xl hover:text-slate-400">
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
