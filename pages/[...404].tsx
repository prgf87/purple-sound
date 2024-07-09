import ContactButton from "@/components/ContactButton";
import Header from "@/components/Header";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

type Props = { nav: Boolean; setNav: Dispatch<SetStateAction<boolean>> };

const page404 = ({ nav, setNav }: Props) => {
  return (
    <main className="max-h-full max-w-[100vw] overflow-hidden">
      <Header />
      <div className="flex items-center justify-center">
        <p className="py-80 text-2xl">
          <span className="error text-4xl font-bold uppercase underline decoration-amber-500">
            Error 404:
          </span>{" "}
          This page does not exist, please go back{" "}
          <Link href="/" className="text-gray-300 hover:underline">
            home
          </Link>
        </p>
      </div>
      <Footer nav={nav} setNav={setNav} />
    </main>
  );
};

export default page404;
