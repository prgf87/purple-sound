import Hero from '@/components/Hero';
import Head from 'next/head';
import Brands from '@/components/Brands';
import Banners from '@/components/Banners';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Sound Company</title>
        <meta name="description" content="Purple Sound Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/img1.png" />
      </Head>
      <main className="overflow-x-hidden max-w-[100vw]">
        <div className="fixed left-0 top-0 right-0 z-10">
          <Header />
        </div>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Banners />
        </div>
        <div id="brands">
          <Brands />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="reviews"></div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
