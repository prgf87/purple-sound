import Link from 'next/link';
import React from 'react';
import { CldImage } from 'next-cloudinary';

type Props = { name: string; link: string; image: string };

function Brand({ link, image, name }: Props) {
  return (
    <Link href={link} target="_blank">
      <CldImage
        src={image}
        alt={name}
        width={180}
        height={50}
        className="object-contain h-24"
        style={{ color: 'white' }}
      />
    </Link>
  );
}

export default Brand;
