import Image from 'next/image';
import React from 'react';
import img1 from '@/public/images/gallery/16.jpg';
import img2 from '@/public/images/gallery/15.jpg';

type Props = {};

function Process({}: Props) {
  return (
    <div className="relative bg-img z-0">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="grid mx-auto max-w-7xl justify-center items-center">
        <div className="w-full flex justify-center items-center z-10 bg-gradient-to-t from-black/5 to-black/90">
          <h1 className="text-center pt-20 underline underline-offset-8">
            our process
          </h1>
        </div>
        <section className="grid grid-cols-1 mx-auto py-4 z-10">
          <div className="process">
            <div className="process-wrap">
              <h1 className="text-7xl text-left">consultation</h1>
              <p className="text-left">
                We begin with a comprehensive consultation to understand your
                vision, goals, and space.
              </p>
            </div>
            <div>
              <Image src={img1} alt={'brand image'} className="process-img" />
            </div>
          </div>
          <div className="process">
            <div>
              <Image src={img2} alt={'brand image'} className="process-img" />
            </div>
            <div className="process-wrap">
              <h1 className="text-7xl text-left">Design & Planning</h1>
              <p className="text-left">
                Our team crafts a detailed plan, incorporating the best
                technology and techniques to achieve the desired sound
                experience.
              </p>
            </div>
          </div>
          <div className="process">
            <div className="process-wrap">
              <h1 className="text-7xl text-left">collaboration</h1>
              <p className="text-left">
                We involve you throughout the process to ensure your vision is
                realized.
              </p>
            </div>
            <div></div>
          </div>
          <div className="process">
            <div></div>
            <div className="process-wrap">
              <h1 className="text-7xl text-left">Installation</h1>
              <p className="text-left">
                We execute the installation with precision, ensuring every
                element is seamlessly integrated.
              </p>
            </div>
          </div>
          <div className="process">
            <div className="process-wrap">
              <h1 className="text-7xl text-left">Testing & Calibrating</h1>
              <p className="text-left">
                Our experts meticulously calibrate the system for optimal
                performance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Process;
