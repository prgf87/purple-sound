import ContactButton from '@/components/ContactButton';
import Header from '@/components/Header';
import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';

type Props = {};

const page404 = (props: Props) => {
  return (
    <main>
      <Header />
      <div className="flex justify-center items-center">
        <p className="text-2xl pt-80">
          <span className="error text-4xl font-bold uppercase underline decoration-amber-500">
            Error 404:
          </span>{' '}
          This page does not exist, please go back{' '}
          <Link href="/" className="hover:underline">
            home
          </Link>
        </p>
        <ContactButton />
      </div>
    </main>
  );
};

export default page404;
