import React from "react";
import Banner from "./Banner";
import data from "@/data/data.json";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { SlMusicToneAlt } from "react-icons/sl";
import { SiAltiumdesigner, SiGooglemarketingplatform } from "react-icons/si";
import { RiSoundModuleFill } from "react-icons/ri";
import { MdOutlineEngineering } from "react-icons/md";
import Link from "next/link";

type Props = {};

function Banners({}: Props) {
  const { banners } = data.intro;
  return (
    <div className="z-0 shadow-xl">
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
      <div className="max-w-screen mx-auto p-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="py-4 text-3xl text-white">Our Services</h1>
          <div>
            <h1 className="text-center text-5xl drop-shadow-2xl sm:text-7xl">
              Taking the Hassle out of the Process
            </h1>
          </div>
          <div className="mx-auto grid gap-x-4 md:grid-cols-3">
            <div className="mt-8 flex flex-col rounded-xl border p-4 shadow-md">
              <div className="flex items-center justify-center">
                <BiPurchaseTagAlt size={100} />
              </div>
              <h3 className="pt-4 text-sm sm:text-2xl">
                <span className="text-white">Studio Hire</span>
              </h3>
              <p className="pt-4 text-left text-base">
                Step into our state-of-the-art recording studio and bring your
                musical vision to life. Whether you&apos;re a solo artist or a
                full band, our acoustically-treated space and top-notch
                equipment ensure your sound is captured with pristine clarity.
                Book your session today and experience the difference quality
                makes.
              </p>
            </div>
            <div className="mt-8 flex flex-col rounded-xl border p-4 shadow-md">
              <div className="flex items-center justify-center">
                <SlMusicToneAlt size={100} className="fill-[#7D1CBF]" />
              </div>
              <h3 className="pt-4 text-sm sm:text-2xl">
                <span className="text-white">Music Lessons</span>
              </h3>
              <p className="pt-4 text-left text-base">
                Unlock your musical potential with our expert tutors. From
                beginners to advanced players, we offer bespoke lessons tailored
                to your goals and learning style. Guitar, piano, drums, or
                vocals—whatever your instrument, we&apos;re here to help you
                master it. Start your musical journey with us today.
              </p>
            </div>
            <div className="mt-8 flex flex-col rounded-xl border p-4 shadow-md">
              <div className="flex items-center justify-center">
                <SiGooglemarketingplatform size={100} />
              </div>
              <h3 className="pt-4 text-sm sm:text-2xl">
                <span className="text-white">
                  Marketing, Consultancy and Social Media Services:
                </span>
              </h3>
              <p className="pt-4 text-left text-base">
                In today&apos;s digital landscape, your sound is just the
                beginning. Our marketing wizards and social media gurus are here
                to amplify your presence and connect you with your audience. Let
                us craft a strategy that puts your talent centre stage and
                builds your brand.
              </p>
            </div>
            <div className="my-8 flex flex-col rounded-xl border p-4 shadow-md">
              <div className="flex items-center justify-center">
                <SiAltiumdesigner size={100} className="text-[#7D1CBF]" />
              </div>
              <h3 className="pt-4 text-sm sm:text-2xl">
                <span className="text-white">Logo and Brand Design</span>
              </h3>
              <p className="pt-4 text-left text-base">
                Your brand is your visual voice. Our talented designers will
                work closely with you to create a striking logo and cohesive
                brand identity that resonates with your audience and sets you
                apart from the crowd. Make a lasting impression before the first
                note plays.
              </p>
            </div>
            <div className="my-8 flex flex-col rounded-xl border p-4 shadow-md">
              <div className="flex items-center justify-center">
                <MdOutlineEngineering size={100} />
              </div>
              <h3 className="pt-4 text-sm sm:text-2xl">
                <span className="text-white">Sound Engineer Hire</span>
              </h3>
              <p className="pt-4 text-left text-base">
                Elevate your live performances or recording sessions with our
                skilled sound engineers. With years of experience and an ear for
                perfection, they&apos;ll ensure your sound is balanced, clear,
                and impactful. Focus on your performance while we focus on
                delivering audio excellence.
              </p>
            </div>
            <div className="my-8 flex flex-col rounded-xl border p-4 shadow-md">
              <div className="flex items-center justify-center">
                <RiSoundModuleFill size={100} className="text-[#7D1CBF]" />
              </div>
              <h3 className="pt-4 text-sm sm:text-2xl">
                <span className="text-white">Mixing and Mastering</span>
              </h3>
              <p className="pt-4 text-left text-base">
                Transform your raw recordings into polished, professional tracks
                with our mixing and mastering services. Our seasoned engineers
                use cutting-edge technology to balance, enhance, and perfect
                your sound, giving your music the professional edge it deserves.
                Let us help you create a product that&apos;s ready for the world
                stage.
              </p>
            </div>
          </div>
          <div className="pt-4">
            <Link href={"/#contact"}>
              <button className="btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banners;
