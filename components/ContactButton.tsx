import Link from 'next/link';
import React from 'react';

type Props = {};

const ContactButton = (props: Props) => {
  return (
    <div className="btn absolute bottom-20">
      <Link href="/contact">Contact Us</Link>
    </div>
  );
};

export default ContactButton;
