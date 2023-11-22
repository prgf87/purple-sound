import React from 'react';
import Banner from './Banner';
import data from '@/data/data.json';

type Props = {};

function Banners({}: Props) {
  const { banners } = data.intro;
  return (
    <div className="z-0">
      {banners.map((ban, i) => {
        return (
          <Banner
            key={i}
            customBg={ban.customBg}
            heading={ban.heading}
            message={ban.message}
          />
        );
      })}
    </div>
  );
}

export default Banners;
