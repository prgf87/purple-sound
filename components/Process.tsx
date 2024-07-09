import React from "react";
import { CldImage } from "next-cloudinary";

function Process() {
  return (
    <div className="relative z-0 w-full bg-gradient-to-t from-black/0 to-black/50">
      <div id="process" className="relative -top-16" />

      <CldImage
        alt={"Confetti machine background photo from inside a night club event"}
        src={"PurpleSoundCo/Images/gallery/1_ifpslv"}
        width="1920"
        height="1080"
        sizes="100%"
        className="absolute bottom-0 left-0 right-0 top-0 h-full bg-gradient-to-b from-black/90 to-black/0 object-cover opacity-40"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-black/50" />
      <div className="bottom-0 left-0 right-0 top-0">
        <div className="mx-auto grid max-w-5xl items-center justify-center">
          <div className="z-10 flex w-full items-center justify-center">
            <h1 className="pt-20 text-center">our process</h1>
          </div>
          <section className="z-10 mx-auto grid grid-cols-1 py-4">
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-right sm:text-6xl">
                  consultation
                </h1>
                <p className="process-p sm:text-right">
                  We begin with a in-depth consultation to understand your{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-red-500 md:text-3xl">
                    vision
                  </span>
                  ,{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-orange-500 md:text-3xl">
                    goals
                  </span>
                  , and{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-yellow-500 md:text-3xl">
                    space
                  </span>
                  .
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  width="600"
                  height="900"
                  src={"PurpleSoundCo/Images/gallery/19_aoz6xv"}
                  alt={
                    "Photo of a laptop on a wooden desk with some people gesturing at it"
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <CldImage
                  src={"PurpleSoundCo/Images/gallery/25_r9e07q"}
                  width="600"
                  height="900"
                  alt={
                    "Photo of two people pointing at a laptop on a wodden desk"
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
              <div className="process-wrap">
                <h1 className="text-left text-4xl sm:text-6xl">
                  Design & Planning
                </h1>
                <p className="process-p text-left">
                  Our team crafts a detailed plan, incorporating the best
                  technology and techniques to achieve the{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-rose-500 md:text-3xl">
                    best sound
                  </span>{" "}
                  experience.
                </p>
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-right sm:text-6xl">
                  collaboration
                </h1>
                <p className="process-p sm:text-right">
                  We{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-orange-500 md:text-3xl">
                    involve you
                  </span>{" "}
                  throughout the process to ensure{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-teal-500 md:text-3xl">
                    your vision
                  </span>{" "}
                  reaches its{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-lime-500 md:text-3xl">
                    fullest potential
                  </span>
                  .
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  src={"PurpleSoundCo/Images/gallery/18_huvh0b"}
                  width="600"
                  height="900"
                  alt={
                    "Photo of a wooden desk with many people sitting around it, working with laptops. Other things are on the desk such as mobile phones, a bowl of snacks, cup of coffee, some headphones, phone charger and a tea pot"
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <CldImage
                  src={"PurpleSoundCo/Images/gallery/20_tnarny"}
                  width="600"
                  height="900"
                  alt={
                    "Photo of a broadcast studio with two microphones setup for recording and two pairs of headphones on  wooden desk. You can see another studio beyond the room through the clear glass wall that separates this studio from the controller"
                  }
                  className="process-img"
                  sizes="100%"
                />
              </div>
              <div className="process-wrap">
                <h1 className="text-left text-4xl sm:text-6xl">Installation</h1>
                <p className="process-p text-left">
                  We execute the installation with precision, ensuring every
                  element is{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-blue-500 md:text-3xl">
                    seamlessly integrated.
                  </span>
                </p>
              </div>
            </div>
            <div className="process">
              <div className="process-wrap">
                <h1 className="text-4xl sm:text-right sm:text-6xl">
                  Testing & Calibrating
                </h1>
                <p className="process-p sm:text-right">
                  <span className="text-sm font-bold uppercase tracking-normal text-blue-500 md:text-3xl">
                    Our experts
                  </span>{" "}
                  meticulously calibrate the system for{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-green-500 md:text-3xl">
                    optimal performance
                  </span>{" "}
                  and{" "}
                  <span className="text-sm font-bold uppercase tracking-normal text-yellow-500 md:text-3xl">
                    user experience.
                  </span>
                </p>
              </div>
              <div className="process-wrap">
                <CldImage
                  src={"PurpleSoundCo/Images/gallery/6_zz4csq"}
                  width="600"
                  height="900"
                  alt={"Photo of a blue, high-quality music studio mixing desk"}
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
