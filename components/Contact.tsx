'use client';
import React, { FormEventHandler } from 'react';
import { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import LoadingSpinner from './LoadingSpinner';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      });

      if (response.status === 200) {
        console.log(response);
        setSentEmail(true);
        alert('Message sent, thanks for getting in touch.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const errorResponse = await response.json();
        alert(
          errorResponse.message || 'Something went wrong, please try again.'
        );
      }
    } catch (err) {
      console.error(err);
      alert('Sorry, something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  console.log(date);

  return (
    <div className="flex justify-center items-center">
      <div className="sm:space-y-4 flex flex-col mt-10">
        <div className="space-y-2">
          <h1 className="text-7xl text-center">Contact Us</h1>
          <p>
            We would love to hear from you. Please fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <p>Fields marked with an asterix must be filled in</p>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-0.5 sm:space-y-2 mt-4"
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
              required
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
            className="contact-input2"
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            placeholder="Subject"
            value={subject}
            className="contact-input2"
            type="text"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            className="contact-input2"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          {sentEmail ? (
            <p className="btn4-dis text-center">Message sent</p>
          ) : (
            <button
              className={!captcha ? `btn4-dis` : `btn4`}
              disabled={!captcha || sentEmail ? true : false}
            >
              {loading ? <LoadingSpinner /> : 'Submit'}
            </button>
          )}
          {/* <ReCAPTCHA
            sitekey={reCaptchaKey}
            onChange={(e) => {
              fetch('/api/captcha', {
                method: 'POST',
                body: e,
              }).then(({ ok }) => {
                if (ok === true) setCaptcha(true);
                else alert('Recaptcha failed, please try again');
              });

            }}
            className="flex justify-center items-center sm:mt-0"
          /> */}
        </form>
      </div>
    </div>
  );
}
