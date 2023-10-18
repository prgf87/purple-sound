import Image from 'next/image';
import React from 'react';

import img1 from '@/public/images/gallery/1.jpg';
import img2 from '@/public/images/gallery/2.jpg';
import img3 from '@/public/images/gallery/6.jpg';
import img4 from '@/public/images/gallery/4.jpg';

type Props = {};

function Intro({}: Props) {
  return (
    <div className="relative min-h-[100vh] pt-20 max-w-7xl mx-auto">
      <h1 className="text-center text-5xl sm:text-7xl pb-4">
        Lorem ipsum dolor sit
      </h1>
      <h2 className="text-center px-8 text-2xl sm:px-32 py-4 pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptatum adipisci placeat, commodi rerum animi nemo ullam delectus sit
        cumque repellendus quis vel soluta fugit? Totam quam consequuntur ea
        dolores?
      </h2>
      <div className="grid md:grid-cols-2 mx-auto max-w-7xl gap-5">
        <div className="intro-boxes-img">
          <Image src={img1} className="object-contain h-80" alt="/" />
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
          <Image src={img2} className="object-contain h-80" alt="/" />
        </div>
        <div className="intro-boxes-img">
          <Image src={img3} className="object-contain h-80" alt="/" />
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
          <Image src={img4} className="object-contain h-80" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
