"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="text-black shadow-md sticky top-0 bg-white z-50">
      <div className="w-[90%] mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" onClick={() => window.location.reload()}>
            <Image src={logo} alt="Mulya Bazzar Logo" className="h-20 w-auto" />
          </a>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-3xl cursor-pointer" />
          )}
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-40`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li className="border-b md:border-none">
              <a
                href="#home"
                onClick={closeMenu}
                className="block hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                Home
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#about"
                onClick={closeMenu}
                className="block hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                About Us
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#features"
                onClick={closeMenu}
                className="block hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                Features
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
