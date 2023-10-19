import React from 'react';
import data from '@/data/intro.json';
import Brand from './Brand';

type Props = {};

function Brands({}: Props) {
  const { brands } = data.intro;

  return (
    <div className="relative py-20 text-center bg-[#33294A]/30">
      <h1 className="text-6xl">some of the Brands we work with</h1>
      <div className="flex flex-1 flex-wrap space-x-2 justify-evenly items-center">
        {brands
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((brand, i) => {
            return (
              <div key={i} className="pt-10">
                <Brand
                  image={brand.image}
                  link={brand.link}
                  name={brand.name}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Brands;
