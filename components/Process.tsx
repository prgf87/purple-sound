import React from 'react';

type Props = {};

function Process({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center pt-20">
        <h1 className="text-7xl">our process</h1>
      </div>

      <section className="grid grid-cols-2 mx-auto py-4">
        <div className="pt-12">
          <h1 className="text-3xl text-center">consultation</h1>
          <p className="px-4 text-center">
            We begin with a comprehensive consultation to understand your
            vision, goals, and space.
          </p>
        </div>
        <div className="pt-12">
          <h1 className="text-3xl text-center">Design & Planning</h1>
          <p className="px-4 text-center">
            Our team crafts a detailed plan, incorporating the best technology
            and techniques to achieve the desired sound experience.
          </p>
        </div>
        <div className="pt-12">
          <h1 className="text-3xl text-center">Installation</h1>
          <p className="px-4 text-center">
            We execute the installation with precision, ensuring every element
            is seamlessly integrated.
          </p>
        </div>
        <div className="pt-12">
          <h1 className="text-3xl text-center">Testing & Calibrating</h1>
          <p className="px-4 text-center">
            Our experts meticulously calibrate the system for optimal
            performance.
          </p>
        </div>
      </section>
      <div className="py-12">
        <h1 className="text-3xl text-center">client collaboration</h1>
        <p className="px-4 text-center">
          We involve you throughout the process to ensure your vision is
          realized.
        </p>
      </div>
    </>
  );
}

export default Process;
