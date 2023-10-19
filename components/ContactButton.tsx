import Link from 'next/link';
import React from 'react';

type Props = {};

const ContactButton = (props: Props) => {
  return (
    <div className="btn absolute bottom-40">
      <Link href="/contact">Contact Me</Link>
    </div>
  );
};

export default ContactButton;
