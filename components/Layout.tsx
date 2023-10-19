import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = { children: any };

function Layout({ children }: Props) {
  return (
    <div>
      <div className="fixed left-0 top-0 right-0 z-10">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
