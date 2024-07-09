import React from "react";
import data from "@/data/data.json";
import Brand from "./Brand";

function Brands() {
  const { brands } = data.intro;

  return (
    <div className="relative bg-[#33294A]/30 px-8 py-20 text-center">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-6xl">some of the products we use</h1>
        <div className="flex flex-1 flex-wrap items-center justify-around space-x-2">
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
        {/* <div className="flex justify-center items-center pt-20">
          <ContactButton />
        </div> */}
      </div>
    </div>
  );
}

export default Brands;
