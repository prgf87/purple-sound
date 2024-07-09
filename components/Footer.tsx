import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type Props = { nav: Boolean; setNav: Dispatch<SetStateAction<boolean>> };

function Footer({ nav, setNav }: Props) {
  return (
    <div className="flex items-center justify-center border-t-2 bg-black/90 py-20 text-center">
      <div className="mx-auto grid">
        <Link
          href={"/#hero"}
          onClick={() => {
            if (nav) {
              setNav(!nav);
            }
          }}
        >
          <h1 className="text-5xl hover:text-slate-400 sm:text-7xl">
            Purple Sound Company
          </h1>
        </Link>
        <p className="text-xl uppercase">
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
