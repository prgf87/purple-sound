import React from 'react';

type Props = {
  open: Boolean;
  setOpen: any;
  success: Boolean;
};

function Modal({ open, setOpen, success }: Props) {
  if (success === true) {
    return (
      <div
        className="border text-card-foreground w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden z-50"
        data-v0-t="card"
      >
        <div className="flex justify-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-16 w-16 text-[#33294A]/70"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div className="px-8 py-4">
          <h1 className="text-5xl">Email Sent Successfully</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Your email has been successfully delivered. We will get back to your
            enquiry as soon as we can.
          </p>
        </div>
        <div className="px-8 py-4 flex justify-end">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            onClick={() => setOpen(!open)}
          >
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="border text-card-foreground w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden z-50"
        data-v0-t="card"
      >
        <div className="flex justify-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-16 w-16 text-red-500"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
        </div>
        <div className="px-8 py-4">
          <h1 className="text-5xl">Something went wrong..</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Something went wrong, please try again. Alternatively, you can
            contact us directly on{' '}
            <a
              href="mailto:info@purplesoundco.com"
              className="underline text-blue-400 hover:text-blue-600"
            >
              info@purplesoundco.com
            </a>
          </p>
        </div>
        <div className="px-8 py-4 flex justify-end">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:brightness-75 h-10 px-4 py-2"
            onClick={() => setOpen(!open)}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
