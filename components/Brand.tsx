import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { name: string; link: string; image: string };

function Brand({ link, image, name }: Props) {
  return (
    <Link href={link} target="_blank">
      <Image
        src={image}
        alt={name}
        width={160}
        height={50}
        className="object-contain h-24"
        style={{ color: 'white' }}
      />
    </Link>
  );
}

export default Brand;
