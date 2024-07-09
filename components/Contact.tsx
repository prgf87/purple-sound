"use client";
import React from "react";
import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";

export default function Contact() {
  const [captcha, setCaptcha] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [sentEmail, setSentEmail] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);

  const { executeRecaptcha } = useReCaptcha();

  const submitHandler = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const token = await executeRecaptcha("form_submit");
      if (token.length > 20) {
        const res = await fetch("/api/captcha", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token }),
        });
        const parsedRes = await res.json();
        if (parsedRes.message === "Success") {
          setCaptcha(true);
          const response = await fetch("/api/mail", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              companyName: companyName ? companyName : "N/A",
              location: location,
              date: date,
              subject: subject,
              message: message,
            }),
          });
          const resParsed = await response.json();

          if (resParsed.message === "Email sent successfully") {
            setLoading(false);
            setSuccess(true);
            setSentEmail(true);
            setOpen(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setCompanyName("");
            setDate("");
            setLocation("");
          }
        }
      }
    } catch (err) {
      console.error(err);
      setOpen(true);
      // alert('Sorry, something went wrong, please try again.');
    } finally {
      return;
    }
  };

  return (
    <div className="flex items-center justify-center pb-10">
      <div id="contact" className="relative -top-10" />

      <div className="mt-10 flex flex-col px-8 sm:space-y-4 lg:px-0">
        <div className="space-y-2">
          <h1 className="text-center text-7xl">Contact Us</h1>
          <div>
            <p className="text-center md:px-20 lg:px-0">
              We would love to hear from you. Please fill out the form below and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {open && (
          <div className="absolute left-0 right-0">
            <div className="relative top-32">
              <Modal open={open} setOpen={setOpen} success={success} />
            </div>
          </div>
        )}

        <form
          onSubmit={submitHandler}
          className="mt-4 flex flex-col space-y-0.5 sm:space-y-2"
        >
          <div className="flex space-x-0.5 sm:space-x-2">
            <input
              placeholder="Name*"
              value={name}
              className="contact-input"
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              placeholder="Email*"
              value={email}
              className="contact-input"
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex space-x-0.5 sm:space-x-2">
            <input
              placeholder="Company Name"
              value={companyName}
              className="contact-input"
              type="text"
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />

            <input
              placeholder="Location*"
              value={location}
              className="contact-input"
              type="text"
              required
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <input
            placeholder="Date of Event"
            value={date}
            className="contact-input text-gray-400"
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            placeholder="Subject*"
            value={subject}
            className="contact-input"
            type="text"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message*"
            value={message}
            className="contact-input"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          {sentEmail ? (
            <p className="btn4-dis text-center">Message sent</p>
          ) : (
            <div className="group relative flex justify-center pt-4">
              <button
                className={`w-1/3 ${
                  !name || !email || !subject || !location || !date || !message
                    ? `btn4-dis`
                    : `btn4`
                }`}
                disabled={
                  sentEmail ||
                  !name ||
                  !email ||
                  !subject ||
                  !location ||
                  !date ||
                  !message
                }
                type="submit"
              >
                {loading ? <LoadingSpinner /> : "Submit"}
              </button>
              {!name || !email || !subject || !location || !date || !message ? (
                <div
                  className={`${`hidden group-hover:block`} absolute z-10 rounded-md bg-[#33294A]/80 p-4 shadow-md`}
                >
                  <p className="px-2 py-2 text-center text-base font-bold text-white/80">
                    There are some fields missing, please fill them in before
                    trying to submit the message.
                  </p>
                </div>
              ) : null}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
