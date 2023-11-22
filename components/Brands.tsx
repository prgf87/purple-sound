import React from 'react';
import data from '@/data/data.json';
import Brand from './Brand';
import ContactButton from './ContactButton';

type Props = {};

function Brands({}: Props) {
  const { brands } = data.intro;

  return (
    <div className="relative py-20 px-8 text-center bg-[#33294A]/30">
      <h1 className="text-5xl">some of the Brands we work with</h1>
      <div className="flex flex-1 flex-wrap space-x-2 justify-around items-center">
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
      <div className="flex justify-center items-center pt-20">
        <ContactButton />
      </div>
    </div>
  );
}

export default Brands;
