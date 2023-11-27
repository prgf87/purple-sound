import React from 'react';
import { CldImage } from 'next-cloudinary';
import data from '@/data/data.json';

type Props = {};

function Process({}: Props) {
  return (
    <div className="relative z-0">
      <CldImage
        alt={'Confetti machine background photo from inside a night club event'}
        src={data.intro.process[0]['bg-image']}
        width={1920}
        height={1080}
        sizes="100w"
        className="h-[220vh] bg-black opacity-40 object-cover"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="absolute left-0 top-0 right-0 bottom-0">
        <div className="grid mx-auto max-w-5xl justify-center items-center">
          <div className="w-full flex justify-center items-center z-10 bg-gradient-to-t from-black/5 to-black/90">
            <h1 className="text-center pt-20">our process</h1>
          </div>
          <section className="grid grid-cols-1 mx-auto py-4 z-10">
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-3xl sm:text-5xl text-right">
                  consultation
                </h1>
                <p className="process-p text-right">
                  We begin with a comprehensive consultation to understand your
                  vision, goals, and space.
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  width={1920}
                  height={1080}
                  src={'PurpleSoundCo/Images/gallery/19_aoz6xv'}
                  alt={
                    'Photo of a laptop on a wooden desk with some people gesturing at it'
                  }
                  className="process-img"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/25_r9e07q'}
                  width={1920}
                  height={1080}
                  alt={
                    'Photo of two people pointing at a laptop on a wodden desk'
                  }
                  className="process-img"
                  sizes="100vw"
                />
              </div>
              <div className="process-wrap">
                <h1 className="text-3xl sm:text-5xl text-left">
                  Design & Planning
                </h1>
                <p className="process-p text-left">
                  Our team crafts a detailed plan, incorporating the best
                  technology and techniques to achieve the desired sound
                  experience.
                </p>
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-3xl sm:text-5xl text-right">
                  collaboration
                </h1>
                <p className="process-p text-right">
                  We involve you throughout the process to ensure your vision is
                  realized.
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/18_huvh0b'}
                  width={1920}
                  height={1080}
                  alt={
                    'Photo of a wooden desk with many people sitting around it, working with laptops. Other things are on the desk such as mobile phones, a bowl of snacks, cup of coffee, some headphones, phone charger and a tea pot'
                  }
                  className="process-img"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/20_tnarny'}
                  width={1920}
                  height={1080}
                  alt={
                    'Photo of a broadcast studio with two microphones setup for recording and two pairs of headphones on  wooden desk. You can see another studio beyond the room through the clear glass wall that separates this studio from the controller'
                  }
                  className="process-img"
                  sizes="100vw"
                />
              </div>
              <div className="process-wrap">
                <h1 className="text-3xl sm:text-5xl text-left">Installation</h1>
                <p className="process-p text-left">
                  We execute the installation with precision, ensuring every
                  element is seamlessly integrated.
                </p>
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-3xl sm:text-5xl text-right">
                  Testing & Calibrating
                </h1>
                <p className="process-p text-right">
                  Our experts meticulously calibrate the system for optimal
                  performance and user experience.
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  src={'PurpleSoundCo/Images/gallery/6_zz4csq'}
                  width={1920}
                  height={1080}
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
