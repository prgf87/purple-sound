import Link from 'next/link';
import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between items-center py-6 px-10">
      {/* <div>Logo</div> */}
      <div>Menu</div>
      <div>
        <ul className="flex space-x-5">
          <li className="header-link">
            <Link href={'/'}>Home </Link>
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
