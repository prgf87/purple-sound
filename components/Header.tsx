import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between items-center py-6 border-b border-spacing-2 border-[#eee]/30 shadow-xl bg-[#33294A] px-10">
      <div>Logo</div>
      <div>Menu</div>
    </div>
  );
}

export default Header;
