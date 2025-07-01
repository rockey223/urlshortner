"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SlPaperClip } from "react-icons/sl";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="navbar   bg-gray-200 text-black px-5 lg:px-[50px] 2xl:px-[120px] shadow-md overflow-x-hidden">
        <div className="nav-wrapper w-full flex justify-between items-center p-2 md:p-4">
          <div className="branding">
            <div className="logo"></div>
            <div className="brand_name capitalize text-2xl font-bold">
              <Link href="/" className="flex items-center gap-2">
               <SlPaperClip /> shorty
              </Link>
            </div>
          </div>
          <div className="hamMenu block md:hidden">
            <button
              className="group inline-flex w-12 h-12 cursor-pointer text-slate-800 text-center items-center justify-center rounded transition"
              aria-pressed={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current pointer-events-none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>
          </div>
          <div
            className={`navlinks absolute md:relative ${
              isOpen ? "max-md:right-0" : "max-md:-right-100"
            } top-16 md:left-auto md:top-auto h-full w-1/2  bg-gray-200 flex justify-center p-10 md:p-0 md:bg-transparent md:w-auto md:h-auto transition-all duration-300 ease-in-out `}
          >
            <ul className="flex space-x-4 gap-y-5 text-xl flex-col md:flex-row md:space-x-8 bg-red">
              <li>
                <Link
                  href="/"
                  className="navlink"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/analytics"
                  className="navlink"
                  onClick={() => setIsOpen(false)}
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="navlink"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
