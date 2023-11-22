import React from 'react';

type Props = { open: Boolean; setOpen: any };

function Modal({ open, setOpen }: Props) {
  return (
    <div
      className="border text-card-foreground w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-16 w-16 text-[#33294A]/70"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="px-8 py-4">
        <h1 className="text-5xl">Email Sent Successfully</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Your email has been successfully delivered. We will get back to you
          soon.
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
}

export default Modal;
