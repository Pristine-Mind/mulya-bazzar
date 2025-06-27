"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 text-gray-800 py-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-center justify-center md:justify-start space-x-4">
        {[ 
          { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61571097347345" },
          { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/105111648/admin/dashboard/" },
          { icon: FaInstagram, href: "https://www.instagram.com/mulya_bazzar/" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="w-5 h-5 text-gray-600 mt-1" />
          <p className="text-sm leading-snug">
            Gairidhara, Kathmandu Metropolitan City, Ward No 2, Bagmati, Nepal
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <FaPhoneAlt className="w-5 h-5 text-gray-600 mt-1" />
          <p className="text-sm leading-snug">+977-9767474645</p>
        </div>
        <div className="flex items-start space-x-3">
          <FaEnvelope className="w-5 h-5 text-gray-600 mt-1" />
          <p className="text-sm leading-snug">info@pristine-minds.com</p>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-end">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by{" "}
          <a
            href="https://pristine-minds.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline transition-colors duration-300"
          >
            Pristine Minds Nepal
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
