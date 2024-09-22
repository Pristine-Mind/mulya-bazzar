"use client";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <header className="text-black shadow-md sticky top-0 bg-white z-50">
      <div className="w-[90%] mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" onClick={() => window.location.reload()}>
            <Image src={logo} alt="Mulya Bazzar Logo" className="h-10 w-auto" />
          </a>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-secondary transition-colors duration-300 text-xl font-semibold py-2 px-4"
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
