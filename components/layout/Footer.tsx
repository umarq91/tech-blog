import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are dedicated to providing exceptional service and quality products to our customers. Our team is passionate about making a positive impact in the community.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+123456789" className="text-blue-500">+1 234 567 89</a></p>
            <p className="text-gray-400">Address: 123 Main St, City, Country</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <i className="fab fa-facebook-f"></i> {/* FontAwesome icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <i className="fab fa-twitter"></i> {/* FontAwesome icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <i className="fab fa-instagram"></i> {/* FontAwesome icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <i className="fab fa-linkedin-in"></i> {/* FontAwesome icon */}
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
