

export default function ContactPage() {
 

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg mb-8 text-center">
        Have any questions or feedback? We&apos;d love to hear from you! Fill out the form below to get in touch.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
           
            required
            className="w-full border-2 text-xl p-2 rounded outline-none"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-2 text-xl p-2 rounded outline-none"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full border-2 text-xl p-2 rounded outline-none h-32"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button type="submit" className="bg-black text-white rounded p-2 text-xl w-full dark:bg-white dark:text-black">
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">Alternatively, you can reach us at:</p>
        <p className="text-lg">Email: contact@yourblog.com</p>
        <p className="text-lg">Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}
