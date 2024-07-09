import React from 'react';
import { CldImage } from 'next-cloudinary';
import data from '@/data/data.json';

type Props = {};

function Process({}: Props) {
  return (
    <div className="relative z-0 w-full bg-gradient-to-t from-black/0 to-black/50">
      <div id="process" className="relative -top-16" />

      <CldImage
        alt={'Confetti machine background photo from inside a night club event'}
        src={'PurpleSoundCo/Images/gallery/1_ifpslv'}
        width="1920"
        height="1080"
        sizes="100%"
        className="absolute h-full left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-black/90 to-black/0 opacity-40 object-cover"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className=" left-0 top-0 right-0 bottom-0">
        <div className="grid mx-auto max-w-5xl justify-center items-center">
          <div className="w-full flex justify-center items-center z-10">
            <h1 className="text-center pt-20">our process</h1>
          </div>
          <section className="grid grid-cols-1 mx-auto py-4 z-10">
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-6xl sm:text-right">
                  consultation
                </h1>
                <p className="process-p sm:text-right">
                  We begin with a in-depth consultation to understand your{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-red-500">
                    vision
                  </span>
                  ,{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-orange-500">
                    goals
                  </span>
                  , and{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-yellow-500">
                    space
                  </span>
                  .
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  width="600"
                  height="900"
                  src={'PurpleSoundCo/Images/gallery/19_aoz6xv'}
                  alt={
                    'Photo of a laptop on a wooden desk with some people gesturing at it'
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/25_r9e07q'}
                  width="600"
                  height="900"
                  alt={
                    'Photo of two people pointing at a laptop on a wodden desk'
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-6xl text-left">
                  Design & Planning
                </h1>
                <p className="process-p text-left">
                  Our team crafts a detailed plan, incorporating the best
                  technology and techniques to achieve the{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-rose-500">
                    best sound
                  </span>{' '}
                  experience.
                </p>
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-6xl sm:text-right ">
                  collaboration
                </h1>
                <p className="process-p sm:text-right">
                  We{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-orange-500">
                    involve you
                  </span>{' '}
                  throughout the process to ensure{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-teal-500">
                    your vision
                  </span>{' '}
                  reaches its{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-lime-500">
                    fullest potential
                  </span>
                  .
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/18_huvh0b'}
                  width="600"
                  height="900"
                  alt={
                    'Photo of a wooden desk with many people sitting around it, working with laptops. Other things are on the desk such as mobile phones, a bowl of snacks, cup of coffee, some headphones, phone charger and a tea pot'
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/20_tnarny'}
                  width="600"
                  height="900"
                  alt={
                    'Photo of a broadcast studio with two microphones setup for recording and two pairs of headphones on  wooden desk. You can see another studio beyond the room through the clear glass wall that separates this studio from the controller'
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-6xl text-left">Installation</h1>
                <p className="process-p text-left">
                  We execute the installation with precision, ensuring every
                  element is{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-blue-500">
                    seamlessly integrated.
                  </span>
                </p>
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-6xl sm:text-right">
                  Testing & Calibrating
                </h1>
                <p className="process-p sm:text-right">
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-blue-500">
                    Our experts
                  </span>{' '}
                  meticulously calibrate the system for{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-green-500">
                    optimal performance
                  </span>{' '}
                  and{' '}
                  <span className="font-bold uppercase text-sm md:text-3xl tracking-normal text-yellow-500">
                    user experience.
                  </span>
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/6_zz4csq'}
                  width="600"
                  height="900"
                  alt={'Photo of a blue, high-quality music studio mixing desk'}
                  className="process-img"
                  sizes="25w"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Process;
