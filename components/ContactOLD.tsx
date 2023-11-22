export default function ContactOLD() {
  return (
    <div className="max-w-7xl mx-auto">
      <form className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">OLD Us</h2>
          <p>
            We would love to hear from you. Please fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <p>Fields marked with an asterix must be filled in</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Name*</label>
            <input
              className="input-field"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email*</label>
            <input
              className="input-field"
              id="email"
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="companyName">Company Name</label>
            <input
              className="input-field"
              id="companyName"
              placeholder="Enter your company name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="location">Location*</label>
            <input
              className="input-field"
              id="location"
              placeholder="Enter the location"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="date">Date*</label>
            <input
              className="input-field"
              id="date"
              type="date"
              placeholder="Enter the date"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject">Subject</label>
            <input
              className="input-field"
              id="subject"
              placeholder="Enter the subject"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="min-h-[100px] input-field"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
