import Link from 'next/link';
import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between items-center py-6 border-b border-spacing-2 border-[#eee]/30 shadow-xl bg-[#33294A] px-10">
      <div>Logo</div>
      <div>
        <ul className="flex space-x-5">
          <li className="header-link">
            <Link href={'/'}>Home </Link>
          </li>
          <li className="header-link">
            <Link href={'/about'}>About </Link>
          </li>

          <li className="header-link">
            <Link href={'/services'}>Services </Link>
          </li>
          <li className="header-link">
            <Link href={'/contact'}>Contact </Link>
          </li>
        </ul>
      </div>
      <div>Menu</div>
    </div>
  );
}

export default Header;
