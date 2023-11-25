'use client';
import React from 'react';
import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import LoadingSpinner from './LoadingSpinner';
import Modal from './Modal';

export default function Contact() {
  const [captcha, setCaptcha] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [sentEmail, setSentEmail] = useState<Boolean>(false);
  // const [error, setError] = useState<string>('');
  // const [success, setSuccess] = useState<string>('');

  const { executeRecaptcha } = useReCaptcha();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    // setLoading(true);
    // setOpen(!open);
    const token = await executeRecaptcha('form_submit');
    console.log(token);
    try {
      const res = await fetch('/api/captcha', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
      });
      console.log('res#####: ', res);
      if (res.ok === true) {
        setCaptcha(true);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }

    if (captcha === true) {
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
            companyName: companyName ? companyName : 'No company provided',
            location: location,
            date: date,
            subject: subject,
            message: message,
          }),
        });

        console.log('mailer response: ', response);
        // if (response.status === 200) {
        //   // alert('Message sent, thanks for getting in touch.');
        //   // setSentEmail(true);
        //   // setOpen(!open);
        //   // setName('');
        //   // setEmail('');
        //   // setSubject('');
        //   // setMessage('');
        //   // setCompanyName('');
        //   // setDate('');
        //   // setLocation('');
        // } else {
        //   const errorResponse = await response.json();
        //   alert(
        //     errorResponse.message || 'Something went wrong, please try again.'
        //   );
        //   return;
        // }
      } catch (err) {
        console.error(err);
        alert('Sorry, something went wrong, please try again.');
      } finally {
        setLoading(false);
        return;
      }
    } else {
      return;
    }
  };

  return (
    <div className="flex justify-center items-center pb-10">
      <div className="sm:space-y-4 flex flex-col mt-10 px-8 sm:px-0">
        <div className="space-y-2">
          <h1 className="text-7xl text-center">Contact Us</h1>
          <div>
            <p>
              We would love to hear from you. Please fill out the form below and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {open ? (
          <div className="absolute left-0 right-0">
            <div className="relative top-32">
              <Modal open={open} setOpen={setOpen} />
            </div>
          </div>
        ) : null}

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
              // required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              placeholder="Email*"
              value={email}
              className="contact-input"
              type="email"
              // required
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
              // required
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <input
            placeholder="Date of Event"
            value={date}
            className="contact-input"
            type="date"
            // required
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            placeholder="Subject*"
            value={subject}
            className="contact-input"
            type="text"
            // required
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message*"
            value={message}
            className="contact-input"
            // required
            onChange={(e) => setMessage(e.target.value)}
          />
          {sentEmail ? (
            <p className="btn4-dis text-center">Message sent</p>
          ) : (
            <button
              className={`btn4`}
              // disabled={sentEmail}
              type="submit"
            >
              {loading ? <LoadingSpinner /> : 'Submit'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
