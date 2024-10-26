"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 px-4">
        <div className="flex space-x-4 mb-4 lg:mb-0">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a> */}
          <a href="https://www.linkedin.com/company/105111648/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://www.instagram.com/mulya_bazzar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
        
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <FaMapMarkerAlt className="w-5 h-5 mb-1 lg:mb-0" />
            <p className="text-sm lg:text-base text-center lg:text-left">
              Gairidhara, Kathmandu Metropolitan City, Ward No 2, Bagmati, Nepal
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <FaPhoneAlt className="w-5 h-5 mb-1 lg:mb-0" />
            <p className="text-sm lg:text-base text-center lg:text-left">+977-9767474645</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-2">
            <FaEnvelope className="w-5 h-5 mb-1 lg:mb-0" />
            <p className="text-sm lg:text-base text-center lg:text-left">info@pristine-minds.com</p>
          </div>
        </div>
        <div className="text-center lg:text-right">
          <p>Developed by <a href="https://pristine-minds.com" target="_blank" className="text-blue-400 hover:underline">Pristine Minds Nepal</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
