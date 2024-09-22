"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
        <div className="text-center md:text-right">
          <p>Developed by <a href="https://pristine-minds.com" target="_blank" className="text-blue-400 hover:underline">Pristine Minds Nepal</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
