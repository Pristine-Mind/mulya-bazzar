"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Modal for Launch Announcement */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 animate-fadeIn">
          <div className="relative bg-white p-10 rounded-2xl shadow-2xl max-w-lg mx-auto transform transition-transform duration-700 ease-in-out scale-100 animate-slideInUp border-2 border-gray-200">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-center mb-8 animate-pulse">
              Coming Soon!
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600 leading-relaxed">
              Stay tuned for something amazing! We're working hard to bring you an incredible experience.
            </p>
            <button
              onClick={closeModal}
              className="block w-full bg-gradient-to-r from-purple-600 via-red-400 to-yellow-500 text-white py-3 rounded-full shadow-md hover:shadow-xl hover:from-purple-700 hover:via-red-500 hover:to-yellow-600 transition-all duration-500 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )
      }

      <header className="text-black shadow-md sticky top-0 bg-white z-50">
        <div className="w-[90%] mx-auto p-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/" onClick={() => window.location.reload()}>
              <Image src={logo} alt="Mulya Bazzar Logo" className="h-12 w-auto" />
            </a>
          </div>

          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-2xl cursor-pointer" />
            )}
          </div>

          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:block absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent z-40`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li className="border-b md:border-none">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="block hover:text-secondary transition-colors duration-300 text-lg font-medium py-2 px-3"
                >
                  Home
                </a>
              </li>
              <li className="border-b md:border-none">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block hover:text-secondary transition-colors duration-300 text-lg font-medium py-2 px-3"
                >
                  About Us
                </a>
              </li>
              <li className="border-b md:border-none">
                <a
                  href="#features"
                  onClick={closeMenu}
                  className="block hover:text-secondary transition-colors duration-300 text-lg font-medium py-2 px-3"
                >
                  Features
                </a>
              </li>
              <li className="border-b md:border-none">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block hover:text-secondary transition-colors duration-300 text-lg font-medium py-2 px-3"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(20px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
