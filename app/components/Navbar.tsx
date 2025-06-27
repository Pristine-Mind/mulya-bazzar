"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" onClick={() => window.location.reload()} className="flex items-center">
          <Image src={logo} alt="Mulya Bazzar Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex md:items-center md:space-x-8 w-full ml-60">
          <nav className="flex-1">
            <ul className="flex space-x-8">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Features", href: "#features" },
                { label: "Contact Us", href: "#contact" },
              ].map((nav) => (
                <li key={nav.label}>
                  <a
                    href={nav.href}
                    className="text-lg font-medium text-black hover:text-orange-600 transition"
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="https://appmulyabazzar.com/"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-700 transition"
          >
            Shop Now
          </a>
        </div>

        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-4">
          {[
            { label: "Home", href: "#home" },
            { label: "About Us", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Contact Us", href: "#contact" },
          ].map((nav) => (
            <a
              key={nav.label}
              href={nav.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-black hover:text-orange-600 transition"
            >
              {nav.label}
            </a>
          ))}

          <a
            href="https://appmulyabazzar.com/"
            onClick={() => setIsOpen(false)}
            className="block mt-4 bg-orange-600 text-center text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-700 transition"
          >
            Shop Now
          </a>
        </nav>
      </div>
    </header>  
  );
};

export default Navbar;
