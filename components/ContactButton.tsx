import Link from 'next/link';
import React from 'react';

type Props = {};

const ContactButton = (props: Props) => {
  return (
    <div className="absolute bottom-20">
      <Link href="/#contact" className="btn">
        Contact Us
      </Link>
    </div>
  );
};

export default ContactButton;
