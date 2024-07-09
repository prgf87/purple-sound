import React from 'react';
import Banner from './Banner';
import data from '@/data/data.json';
import Link from 'next/link';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { SlMusicToneAlt } from 'react-icons/sl';
import { SiAltiumdesigner, SiGooglemarketingplatform } from 'react-icons/si';
import { RiSoundModuleFill } from 'react-icons/ri';
// import { PiUserSoundBold } from 'react-icons/pi';
import { MdOutlineEngineering } from 'react-icons/md';

type Props = {};

function Banners({}: Props) {
  const { banners } = data.intro;
  return (
    <div className="z-0">
      <div id="services" className="relative -top-16" />
      {banners.map((ban, i) => {
        return (
          <Banner
            key={i}
            customBg={ban.customBg}
            image={ban.image}
            heading={ban.heading}
            message={ban.message}
          />
        );
      })}
      <div className="max-w-screen mx-auto p-8 ">
        <div id="services" className="relative top-[-100px]" />

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="pb-4 text-white text-3xl">Our Services</h1>
          <div>
            <h1 className="text-5xl sm:text-7xl text-center drop-shadow-2xl pb-10">
              Taking the Hassle out of the Process
            </h1>
          </div>
          <div className="grid md:grid-cols-3 mx-auto gap-x-4">
            <div className="mt-8 flex flex-col border p-4 rounded-xl shadow-md">
              <div className="flex justify-center items-center">
                <BiPurchaseTagAlt size={100} />
              </div>
              <h3 className="text-sm sm:text-2xl pt-4 ">
                <span className="text-white">Studio Hire</span>
              </h3>
              <p className="pt-4 text-base  text-left">
                Step into our state-of-the-art recording studio and bring your
                musical vision to life. Whether you're a solo artist or a full
                band, our acoustically-treated space and top-notch equipment
                ensure your sound is captured with pristine clarity. Book your
                session today and experience the difference quality makes.
              </p>
            </div>
            <div className="mt-8 flex flex-col border p-4 rounded-xl shadow-md">
              <div className="flex justify-center items-center">
                <SlMusicToneAlt size={100} className="fill-[#7D1CBF]" />
              </div>
              <h3 className="text-sm sm:text-2xl pt-4 ">
                <span className="text-white">Music Lessons</span>
              </h3>
              <p className="pt-4 text-base  text-left">
                Unlock your musical potential with our expert tutors. From
                beginners to advanced players, we offer bespoke lessons tailored
                to your goals and learning style. Guitar, piano, drums, or
                vocals—whatever your instrument, we're here to help you master
                it. Start your musical journey with us today.
              </p>
            </div>
            <div className="mt-8 flex flex-col border p-4 rounded-xl shadow-md">
              <div className="flex justify-center items-center">
                <SiGooglemarketingplatform size={100} />
              </div>
              <h3 className="text-sm sm:text-2xl pt-4 ">
                <span className="text-white">
                  Marketing, Consultancy and Social Media Services:
                </span>
              </h3>
              <p className="pt-4 text-base  text-left">
                In today's digital landscape, your sound is just the beginning.
                Our marketing wizards and social media gurus are here to amplify
                your presence and connect you with your audience. Let us craft a
                strategy that puts your talent centre stage and builds your
                brand.
              </p>
            </div>
            <div className="my-8 flex flex-col border p-4 rounded-xl shadow-md">
              <div className="flex justify-center items-center">
                <SiAltiumdesigner size={100} className="text-[#7D1CBF]" />
              </div>
              <h3 className="text-sm sm:text-2xl pt-4 ">
                <span className="text-white">Logo and Brand Design</span>
              </h3>
              <p className="pt-4 text-base  text-left">
                Your brand is your visual voice. Our talented designers will
                work closely with you to create a striking logo and cohesive
                brand identity that resonates with your audience and sets you
                apart from the crowd. Make a lasting impression before the first
                note plays.
              </p>
            </div>
            <div className="my-8 flex flex-col border p-4 rounded-xl shadow-md">
              <div className="flex justify-center items-center">
                <MdOutlineEngineering size={100} />
              </div>
              <h3 className="text-sm sm:text-2xl pt-4 ">
                <span className="text-white">Sound Engineer Hire</span>
              </h3>
              <p className="pt-4 text-base  text-left">
                Elevate your live performances or recording sessions with our
                skilled sound engineers. With years of experience and an ear for
                perfection, they'll ensure your sound is balanced, clear, and
                impactful. Focus on your performance while we focus on
                delivering audio excellence.
              </p>
            </div>
            <div className="my-8 flex flex-col border p-4 rounded-xl shadow-md">
              <div className="flex justify-center items-center">
                <RiSoundModuleFill size={100} className="text-[#7D1CBF]" />
              </div>
              <h3 className="text-sm sm:text-2xl pt-4 ">
                <span className="text-white">Mixing and Mastering</span>
              </h3>
              <p className="pt-4 text-base  text-left">
                Transform your raw recordings into polished, professional tracks
                with our mixing and mastering services. Our seasoned engineers
                use cutting-edge technology to balance, enhance, and perfect
                your sound, giving your music the professional edge it deserves.
                Let us help you create a product that's ready for the world
                stage.
              </p>
            </div>
          </div>
          {/* <div className="pt-4">
            <Link href={'/#portfolio'}>
              <button className="btn-3">Our Portfolio</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Banners;
