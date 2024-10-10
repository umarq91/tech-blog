import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-10 min-h-[200px] font-yantramanav">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Form Section */}
          <div className="bg-blue-50 p-5 col-span-2">
            <div className="heading flex flex-col gap-4">
              <h5 className="text-blue-500 tracking-[6px] text-sm">Contact</h5>
              <h2 className="text-3xl lg:text-5xl font-bold">Let's get in touch</h2>
              <h5 className="text-lg">You can reach us anytime via bluebase@mail.com</h5>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md w-full"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>

              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-md w-full"
                rows="4"
              ></textarea>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <label>I agree to the terms and conditions</label>
              </div>

              <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition">
                Submit
              </button>
            </form>
          </div>

          {/* Second Column */}
          <div className="py-10 bg-blue-50 px-5 flex flex-col gap-10">
            <div className="flex flex-col justify-center gap-4">
              <div className='flex'>

              <h3 className="text-5xl">22+</h3>
              <p className="text-xl">Years</p>
              </div>
              <h4 className="text-blue-600">Field Experience</h4>
            </div>
            <hr className="border border-gray-300" />
            <div className="flex items-center gap-4">
              <h3 className="text-5xl">950+</h3>
              <p className="text-xl">Projects</p>
              <h4 className="text-blue-600">Done around the world</h4>
            </div>
            <hr className="border border-gray-300" />
            <div className="flex items-center gap-4">
              <h3 className="text-5xl">2</h3>
              <p className="text-xl">Mins</p>
              <h4 className="text-blue-600">Response Time</h4>
            </div>
          </div>

          {/* Third Column */}
          <div className="bg-blue-50 rounded-xl py-10 px-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg"
                  className="h-8 w-10"
                />
                <div>
                  <h3 className="text-2xl">Contact Info</h3>
                  <p className="text-gray-500">+1 455 1482 236</p>
                  <p className="text-gray-500">Bluebase@mail.com</p>
                </div>
              </div>
              <hr />
              <div className="flex items-start gap-3">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg"
                  className="h-8 w-10"
                />
                <div>
                  <h3 className="text-2xl">Visit our office</h3>
                  <p className="text-gray-500">16/9, Down Street</p>
                  <p className="text-gray-500">Edinburgh, Scotland</p>
                  <p className="text-gray-500">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="text-gray-400">
                We are dedicated to providing exceptional service and quality
                products to our customers. Our team is passionate about making a
                positive impact in the community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-400">
                Email:{" "}
                <a href="mailto:info@example.com" className="text-blue-500">
                  info@example.com
                </a>
              </p>
              <p className="text-gray-400">
                Phone:{" "}
                <a href="tel:+123456789" className="text-blue-500">
                  +1 234 567 89
                </a>
              </p>
              <p className="text-gray-400">
                Address: 123 Main St, City, Country
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
