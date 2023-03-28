import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Sound Company</title>
        <meta name="description" content="Purple Sound Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/img1.png" />
      </Head>
      <main>
        <section className="custom-img min-h-screen w-screen">
          <h1 className="text-5xl md:text-[100px] text-white flex justify-center items-center pt-12 lg:pt-40 text-center tracking-widest leading-[50px]">
            Purple Sound
          </h1>
          <h1 className="text-2xl md:text-[50px] text-white flex justify-center items-center text-center tracking-widest sm:leading-[80px]">
            Company
          </h1>
          <div className="pt-64 sm:pt-[32rem] lg:pt-[25rem] grid justify-center items-center text-center text-white text-lg sm:text-2xl pb-10">
            <div className="w-40 h-40 mx-auto">
              <Image
                src="/images/uc.png"
                alt="Under Construction"
                height={1920}
                width={1724}
              />
            </div>
            <h1 className="text-2xl sm:text-4xl">
              For more info, please contact us:
            </h1>
            <p>Email: info@purplesoundco.com</p>
          </div>
        </section>
      </main>
    </>
  );
}
