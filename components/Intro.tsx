import Image from 'next/image';
import React from 'react';

import img1 from '@/public/images/gallery/1.jpg';
import img2 from '@/public/images/gallery/2.jpg';
import img3 from '@/public/images/gallery/6.jpg';
import img4 from '@/public/images/gallery/4.jpg';

type Props = {};

function Intro({}: Props) {
  return (
    <div className="relative min-h-[100vh] p-10  bg-[#33294A]/30">
      <div className="border rounded-3xl py-8 px-20 max-w-7xl grid mx-auto bg-[#33294A]/70">
        {/* <h1 className="text-center text-5xl sm:text-7xl pb-4">
          Experience Audio Excellence
        </h1> */}
        <h2 className="text-center px-8 text-2xl sm:px-10 py-4 pb-6">
          Here at Purple Sound Company, we are passionate about revolutionizing
          the way you experience audio.
        </h2>
        <h2 className="text-center px-8 text-2xl sm:px-10 py-4 pb-6">
          With over 3 years experience in the industry, we have honed our
          expertise in providing cutting-edge audio solutions that redefine
          clarity, precision, and immersion.
        </h2>

        <h2 className="text-center px-8 text-2xl sm:px-10 py-4 pb-6">
          Whether you&apos;re seeking state-of-the-art sound systems, acoustical
          consulting, or bespoke solutions, we invite you to embark on a journey
          of sonic perfection with us.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 mx-auto max-w-7xl gap-5">
        <div className="intro-boxes-img">
          <Image src={img1} className="object-contain max-h-80" alt="/" />
        </div>
        <div className="intro-boxes-p flex-col">
          <h3 className="text-3xl pb-6 uppercase">
            Professional Audio Solutions
          </h3>
          <p className="text-base px-4">
            From recording studios to live events, our professional-grade
            equipment ensures that every note and sound is captured with
            unparalleled clarity.
          </p>
        </div>

        <div className="intro-boxes-p">
          <h3>Innovative Acoustic Solutions</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
        </div>
        <div className="intro-boxes-img">
          <Image src={img2} className="object-contain max-h-80" alt="/" />
        </div>
        <div className="intro-boxes-img">
          <Image src={img3} className="object-contain max-h-80" alt="/" />
        </div>
        <div className="intro-boxes-p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
        </div>
        <div className="intro-boxes-p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
        </div>
        <div className="intro-boxes-img">
          <Image src={img4} className="object-contain max-h-80" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
