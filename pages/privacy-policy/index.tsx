import Head from "next/head";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Head>
        <title>Privacy Policy — Purple Sound Company</title>
        <meta
          name="description"
          content="Purple Sound Company Privacy Policy"
        />
      </Head>

      <main className="min-h-[100dvh] max-w-[100dvw] overflow-x-hidden bg-gradient-to-b from-white/5 via-[#1a142c] to-black text-slate-100">
        <div className="fixed left-0 right-0 top-0 z-10">
          <Header />
        </div>

        <div className="flex min-h-[90dvh] flex-col items-center justify-center px-6 pb-24 pt-32">
          <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900/20 p-10 text-slate-100 shadow-xl">
            <h1 className="mb-4 text-5xl font-bold tracking-normal text-slate-100">
              Privacy Policy
            </h1>

            <p className="mb-6 text-slate-300">
              Last updated: February 02, 2026
            </p>

            <section className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">Introduction</h2>
              <p className="leading-relaxed text-slate-200">
                This privacy notice for <strong>Purple Sound Company</strong>{" "}
                ('we', 'us', or 'our') describes how and why we collect, store,
                use, and share your information when you use our services,
                including when you visit purplesoundco.com or otherwise interact
                with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">What We Collect</h2>
              <p className="leading-relaxed text-slate-200">
                We collect personal information that you provide to us, which
                may include:
              </p>
              <ul className="mt-3 space-y-2 pl-5">
                <li className="list-disc">Names</li>
                <li className="list-disc">Phone numbers</li>
                <li className="list-disc">Email addresses</li>
                <li className="list-disc">Job titles</li>
                <li className="list-disc">Contact preferences</li>
                <li className="list-disc">
                  Device and usage information (IP address, browser, operating
                  system)
                </li>
              </ul>
              <p className="mt-3 text-slate-300">
                <strong>Sensitive information:</strong> We do not process
                sensitive personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed text-slate-200">
                We process your information to provide and improve our services,
                communicate with you, protect security, and comply with legal
                obligations. We only process information when we have a valid
                legal reason to do so.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">Your Rights</h2>
              <p className="leading-relaxed text-slate-200">
                Depending on your location, you may have rights to access,
                correct, or delete your personal information, withdraw consent,
                or request portability. To exercise these rights, submit a data
                subject access request via Termly or contact us at the email
                below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">Children</h2>
              <p className="leading-relaxed text-slate-200">
                We do not knowingly collect data from or market to children
                under 18. If we learn we have collected information from a child
                under 18, we will take steps to delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
              <p className="text-slate-200">
                If you have questions or comments about this notice, email us at{" "}
                <span className="font-semibold text-slate-100">
                  info@purplesoundco.com
                </span>
                .
              </p>

              <div className="mt-4 text-slate-300">
                <p className="font-semibold">Postal contact</p>
                <p>Purple Sound Company</p>
                <p>Whitstable</p>
                <p>Kent</p>
                <p>England</p>
              </div>

              <div className="mt-4 text-slate-300">
                <p className="font-semibold">UK representative</p>
                <p>
                  Peter Myhill —{" "}
                  <a
                    className="text-indigo-400"
                    href="mailto:info@purplesoundco.com"
                  >
                    info@purplesoundco.com
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <a
                    className="text-indigo-400"
                    href="http://www.purplesoundco.com"
                  >
                    purplesoundco.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <p className="text-sm text-slate-400">
                This privacy policy was created using Termly's Privacy Policy
                Generator. To submit a data subject access request use:{" "}
                <a
                  className="text-indigo-400"
                  href="https://app.termly.io/notify/64a859f8-868d-421f-8c66-b705367b5e21"
                  target="_blank"
                  rel="noreferrer"
                >
                  data subject access request
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        <Footer nav={nav} setNav={setNav} />
      </main>
    </>
  );
}
