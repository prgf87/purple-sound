import Hero from '@/components/Hero';
import Head from 'next/head';
import Brands from '@/components/Brands';
import Banners from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dispatch, SetStateAction } from 'react';

type Props = { nav: Boolean; setNav: Dispatch<SetStateAction<boolean>> };

export default function Home({ nav, setNav }: Props) {
  return (
    <>
      <Head>
        <title>Purple Sound Company</title>
        <meta name="description" content="Purple Sound Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="PurpleSoundCo/Images/img1_zzcl5g" />
      </Head>
      <main className="overflow-x-hidden max-w-[100dvw]">
        <div className="fixed left-0 top-0 right-0 z-10">
          <Header />
        </div>
        <div className="top-0">
          <Hero />
        </div>
        <div>
          <Banners />
        </div>
        <div>
          <Brands />
        </div>
        <div>
          <Process />
        </div>
        {/* <div id="reviews"></div> */}
        <div>
          <Contact />
        </div>
        <Footer nav={nav} setNav={setNav} />
      </main>
    </>
  );
}
