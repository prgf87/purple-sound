import Image from 'next/image';
import React from 'react';

import img1 from '@/public/images/gallery/1.jpg';
import img2 from '@/public/images/gallery/2.jpg';

type Props = {};

function Intro({}: Props) {
  return (
    <div className="relative h-[100vh] top-20">
      <h1 className="text-center text-5xl sm:text-7xl">
        Lorem ipsum dolor sit
      </h1>
      <p className="text-center px-8 sm:px-32 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptatum adipisci placeat, commodi rerum animi nemo ullam delectus sit
        cumque repellendus quis vel soluta fugit? Totam quam consequuntur ea
        dolores?
      </p>
      <div className="grid sm:grid-cols-2 mx-auto max-w-7xl">
        <div className="border boder-white p-10">
          <Image src={img1} className="object-fill w-full" alt="/" />
        </div>
        <div className="border boder-white p-10">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
        </div>
        <div className="border boder-white p-10">
          <Image src={img2} className="object-fill w-full" alt="/" />
        </div>
        <div className="border boder-white p-10">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum asperiores, reprehenderit nisi numquam quos quidem dolore
            corrupti esse? Id ad totam ratione quas voluptatibus itaque illum
            similique laborum maxime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
