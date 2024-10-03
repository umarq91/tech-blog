"use client"
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-10 font-montserrat  w-full py-6 ">
      <nav className="flex w-full h-fit items-center justify-between max-w-[1380px] mx-auto px-5 md:px-10 z-[20]">
        {/* Backdrop with black tint */}
        <div className="absolute inset-0 shadow-[0_4px_30px_rgba(0,0,0,0.01)] backdrop-blur  bg-opacity-60"></div>

        {/* Logo */}
        <Link className="relative" href="/">
        <img src="/logo.png"
     style={{ filter: 'invert(1)' }}
     className="h-8 md:h-10 w-8 md:w-10" alt="Logo" />

        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-4 md:gap-8 relative font-geist-sans">
          <div className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact-us" className="bg-black text-white px-4 py-2 rounded-xl">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative h-6 w-6 lg:hidden">
            <button onClick={toggleMenu} className="p-4 absolute -top-2 -left-2 -translate-x-2 -translate-y-2 outline-none">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M4.29999 17.5502V16.8502H19.7V17.5502H4.29999ZM4.29999 12.8502V12.1502H19.7V12.8502H4.29999ZM4.29999 8.1502V7.4502H19.7V8.1502H4.29999Z"
                  fill="#F3F3F3"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 w-[200px] bg-black text-white rounded-lg shadow-lg flex flex-col gap-4 p-4 z-50">
              <Link href="/" onClick={toggleMenu}>Home</Link>
              <Link href="/services" onClick={toggleMenu}>Services</Link>
              <Link href="/about" onClick={toggleMenu}>About Us</Link>
              <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
              <Link href="/contact-us" onClick={toggleMenu} className="bg-white text-black px-4 py-2 rounded-xl">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
