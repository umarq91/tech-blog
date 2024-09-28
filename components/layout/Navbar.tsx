import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full py-6">
      <nav className="flex w-full h-fit items-center justify-between max-w-[1380px] mx-auto px-5 md:px-10 z-[20]">
        {/* Backdrop blur */}
        <div className="absolute inset-0 shadow-[0_4px_30px_rgba(0,0,0,0.01)] backdrop-blur"></div>

        {/* Logo */}
        <a className="relative" href="/">
          <svg className="w-[55px] xl:w-[91px]" viewBox="0 0 92 28" fill="none">
            <g clipPath="url(#a)">
              <path
                fill="url(#b)"
                fillRule="evenodd"
                d="M13.747 27.494c7.592 0 13.747-6.155 13.747-13.747S21.34 0 13.747 0 0 6.155 0 13.747s6.155 13.747 13.747 13.747ZM4.582 11.456h6.874V4.582h4.582v6.874h6.874v4.582h-6.874v6.874h-4.582v-6.874H4.582v-4.582Z"
                clipRule="evenodd"
              ></path>
            </g>
            <g clipPath="url(#c)">
              <path
                fill="url(#d)"
                fillRule="evenodd"
                d="M53.976 27.494H37.06l-6.817-13.747L37.06 0h16.916l6.816 13.747-6.816 13.747Zm-8.458-6.873c3.765 0 6.816-3.078 6.816-6.874s-3.051-6.873-6.816-6.873c-3.765 0-6.817 3.077-6.817 6.873 0 3.796 3.052 6.874 6.817 6.874Z"
                clipRule="evenodd"
              ></path>
            </g>
            <g clipPath="url(#e)">
              <path
                fill="url(#f)"
                d="M85.255 2.54c-5.369-3.826-12.87-3.33-17.687 1.486-4.816 4.817-5.311 12.318-1.485 17.687L85.255 2.54Z"
              ></path>
              <path
                fill="url(#g)"
                d="M69.323 24.953c5.369 3.826 12.87 3.331 17.687-1.485 4.816-4.817 5.311-12.319 1.485-17.687L69.323 24.953Z"
              ></path>
            </g>
            <defs>
              <linearGradient id="b" x1="-.38" x2="27.494" y1="13.747" y2="13.747" gradientUnits="userSpaceOnUse">
                <stop stopColor="#898989"></stop>
                <stop offset=".577" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#898989"></stop>
              </linearGradient>
              <linearGradient id="d" x1="29.821" x2="60.792" y1="13.747" y2="13.747" gradientUnits="userSpaceOnUse">
                <stop stopColor="#898989"></stop>
                <stop offset=".577" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#898989"></stop>
              </linearGradient>
              <linearGradient id="f" x1="67.299" x2="87.01" y1="3.757" y2="23.468" gradientUnits="userSpaceOnUse">
                <stop stopColor="#898989"></stop>
                <stop offset=".577" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#898989"></stop>
              </linearGradient>
              <linearGradient id="g" x1="67.299" x2="87.01" y1="3.757" y2="23.468" gradientUnits="userSpaceOnUse">
                <stop stopColor="#898989"></stop>
                <stop offset=".577" stopColor="#fff"></stop>
                <stop offset="1" stopColor="#898989"></stop>
              </linearGradient>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h27.494v27.494H0z"></path>
              </clipPath>
              <clipPath id="c">
                <path fill="#fff" d="M30.243 0h30.55v27.494h-30.55z"></path>
              </clipPath>
              <clipPath id="e">
                <path fill="#fff" d="M63.542 0h27.494v27.494H63.542z"></path>
              </clipPath>
            </defs>
          </svg>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-4 md:gap-8 relative font-geist-sans">
          <div className="hidden lg:flex items-center gap-8 font-geist-mono font-light text-sm">
            <a href="/accelerator/peoples-choice">People's Choice</a>
            <a href="/accelerator#benefits">What You Get</a>
            <a href="/accelerator#schedule">Schedule</a>
            <a href="/accelerator#mentors">Mentors</a>
            <a href="/accelerator#about">About</a>
          </div>

          {/* Apply Button */}
          <a
            className="rounded-full font-geist-mono bg-[#2E3131] border-white border font-light px-4 py-2 text-sm"
            href="/accelerator/apply"
          >
            <span className="hidden md:inline-block">batch.</span>apply(2024)
          </a>

          {/* Mobile Menu Button */}
          <div className="relative h-6 w-6 lg:hidden">
            <button className="p-4 absolute -top-2 -left-2 -translate-x-2 -translate-y-2 outline-none">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                  d="M4.29999 17.5502V16.8502H19.7V17.5502H4.29999ZM4.29999 12.8502V12.1502H19.7V12.8502H4.29999ZM4.29999 8.1502V7.4502H19.7V8.1502H4.29999Z"
                  fill="#F3F3F3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
