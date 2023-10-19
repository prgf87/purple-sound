import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Sound Company</title>
        <meta name="description" content="Purple Sound Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/img1.png" />
      </Head>
      <main className="overflow-x-hidden">
        <div id="hero">
          <Hero />
        </div>
        <div id="intro">
          <Intro />
        </div>
      </main>
    </>
  );
}
