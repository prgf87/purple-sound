import React from 'react';
import Banner from './Banner';
import data from '@/data/intro.json';

type Props = {};

function Banners({}: Props) {
  const { banners } = data.intro;
  return (
    <>
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
    </>
  );
}

export default Banners;
