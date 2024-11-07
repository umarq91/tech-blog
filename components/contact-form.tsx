"use client";
import React, { useRef, FormEvent } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      // Extract values from the form
      const formData = new FormData(form.current);
      const fromName = formData.get("from_name");
      const lastName = formData.get("last_name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const country = formData.get("country");
      const messageContent = formData.get("message");

      // Format email content
      const emailContent = `
        Hello H-DOT,

        You have received a new message from ${fromName} ${lastName} via your website's contact form.

        **Message Details:**

        - **Name**: ${fromName} ${lastName}
        - **Email**: ${email}
        - **Phone**: ${phone || "N/A"}
        - **Country**: ${country || "N/A"}

        **Message**:
        ${messageContent}

        ---

      `;

      emailjs.send(
        'service_rrpeooh',
        'template_7uq7eqg',
        {
          to_name: "H-DOT",
          from_name: fromName,
          from_last_name: lastName,
          email,
          phone,
          country,
          message: emailContent,
          from_email:email
        },
        'ZB0s5MrgpcBV07keG'
      )
      .then(() => {
        alert("Message sent successfully to H-DOT!");
      })
      .catch(() => {
        alert("An error occurred, please try again.");
      });

      form.current.reset();
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <label htmlFor="firstName" className="text-[12px] text-[#1c1c1c] opacity-[.9px]">
          First Name
          <input
            type="text"
            name="from_name"
            placeholder="First Name"
            required
            className="p-3 border border-gray-300 rounded-md w-full mb-[10px]"
          />
        </label>
        <label htmlFor="lastName" className="text-[12px] text-[#1c1c1c] opacity-[.9px]">
          Last Name
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="p-3 border border-gray-300 rounded-md w-full mb-[10px]"
          />
        </label>
      </div>
      <label htmlFor="email" className="text-[12px] text-[#1c1c1c] opacity-[.9px]">
        Email
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 border border-gray-300 rounded-md w-full mb-[10px]"
        />
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <label htmlFor="phone" className="text-[12px] text-[#1c1c1c] opacity-[.9px]">
          Phone Number
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-md w-full mb-[10px]"
          />
        </label>
        <label htmlFor="country" className="text-[12px] text-[#1c1c1c] opacity-[.9px]">
          Country
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="p-3 border border-gray-300 rounded-md w-full mb-[10px]"
          />
        </label>
      </div>
      <label htmlFor="message" className="text-[12px] text-[#1c1c1c] opacity-[.9px]">
        Message
      </label>
      <textarea
        name="message"
        placeholder="Message"
        required
        className="p-3 border border-gray-300 rounded-md w-full"
        rows={4}
      ></textarea>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="terms" required className="h-4 w-4" />
        <label className="text-[#1c1c1ccc] text-[13px] leading-[1px] font-dmSans">
          I agree to the <span className="underline">terms and conditions</span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 mt-3 px-6 rounded-md w-full hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
