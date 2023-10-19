import React from 'react';
import Header from './Header';

type Props = { children: any };

function layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default layout;
