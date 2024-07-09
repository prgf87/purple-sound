import Link from "next/link";
import React from "react";

const ContactButton = () => {
  return (
    <div className="absolute bottom-20">
      <Link href="/#contact" className="btn">
        Contact Us
      </Link>
    </div>
  );
};

export default ContactButton;
