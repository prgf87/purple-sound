import React from 'react';
import data from '@/data/intro.json';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Brands({}: Props) {
  const { brands } = data.intro;

  return (
    <div className="relative py-20 text-center bg-[#33294A]/30">
      <h1 className="text-6xl">some of the Brands we work with</h1>
      <div className="flex flex-1 flex-wrap space-x-4 justify-center items-center">
        {brands
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((brand, i) => {
            return (
              <div key={i} className="pt-10">
                <Link href={brand.link} target="_blank">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={160}
                    height={50}
                    className="object-contain max-h-20 pb-4"
                    style={{ color: 'white' }}
                  />
                  {/* <span className="btn2">{brand.name}</span> */}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Brands;
