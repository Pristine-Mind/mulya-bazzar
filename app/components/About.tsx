"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import marketplace from "../public/marketplace.jpg";
import background from "../public/background.jpg"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="about"
      className="py-16 text-gray-900"
    >
      <div className="container mx-auto px-4 flex flex-col items-center bg-white bg-opacity-80 py-12 rounded-lg">
        <h2
          className={`text-4xl font-bold mb-6 text-center transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          About Mulya Bazzar
        </h2>
        
        <p
          className={`text-lg max-w-3xl mx-auto text-center mb-8 transform transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Mulya Bazzar is a revolutionary online marketplace that bridges the gap
          between buyers and sellers, creating an efficient and transparent platform for
          the exchange of fresh goods. Whether you are a small-scale farmer, a local
          vendor, or a large business, Mulya Bazzar empowers you to sell your produce with
          ease, reaching a wider audience while ensuring fair trade practices.
        </p>

        <div
          className={`w-full max-w-lg mb-6 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={marketplace}
            alt="Marketplace"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <button
          className={`px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:bg-blue-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Join Mulya Bazzar Today
        </button>
      </div>
    </section>
  );
};

export default About;
