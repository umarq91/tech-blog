import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
          Have a technical issue? Need more details about our services? Or just want to give feedback? We’d love to hear from you.
        </p>

        {/* Form */}
        <form action="#" className="space-y-8">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 mt-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="What do you need help with?"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 mt-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
