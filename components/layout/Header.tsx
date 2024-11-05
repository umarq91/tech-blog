'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu icons

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white lg:px-10 border-b p-4 font-yantramanav border ">
      <div className="container mx-auto flex justify-around items-center">
        {/* Left side: Logo and Brand Name */}
        <div className="flex items-center space-x-4 gap-6">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-10 cursor-pointer transition-transform duration-300 hover:scale-110"
              style={{ filter: 'invert(1)' }}
            />
          </Link>
          <nav className="hidden lg:flex space-x-8 text-md">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
          <Link href="/company" className="hover:text-blue-600 transition">Company</Link>
          <Link href="/careers" className="hover:text-blue-600 transition">Careers</Link>

          
          


        </nav>
        </div>

        {/* Links for larger screens */}
    

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Right side: Contact Info and Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Phone Number */}
          
            <div className="border-l-2 border-gray-200 h-6 mx-2"></div>
            <div className="flex flex-col items-center">
            <Link href="/contact-us">
              <button className="text-blue-700 px-6  rounded-full text-xs hover:text-blue-700 transition">
                Call us
              </button>
            </Link>
            <span className="text-gray-600 text-sm">+91-938-3000</span>
          </div>

          {/* Divider */}
          <div className="border-l-2 border-gray-200 h-6 mx-2"></div>

          {/* Contact Us Button */}
          <Link href="/contact-us">
            <button className="bg-blue-700 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-xs transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden  flex flex-col space-y-4 mt-4 p-4 bg-gray-100 rounded-lg">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition">portfolio</Link>
          <Link href="/company" className="hover:text-blue-600 transition">Comapny</Link>
          <Link href="/careers" className="hover:text-blue-600 transition">Careers</Link>
          



          {/* Contact Info in Mobile */}
          <div className="flex flex-col items-start mt-4">
            <Link href="/contact-us">
              <button className="text-blue-600 text-xs mb-1 hover:text-blue-700 transition">
                Call us: +91-938-3000
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-2 rounded-full text-xs transition">
                Contact Us
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
