"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-[70vh] text-center px-4 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 w-full h-full opacity-60 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-full animate-connect"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="200" r="30" fill="#FF4500" />
          <rect x="120" y="230" width="60" height="20" fill="#FF6347" />

          <circle cx="350" cy="150" r="30" fill="#4682B4" />
          <rect x="320" y="180" width="60" height="20" fill="#6495ED" />

          <circle cx="550" cy="250" r="30" fill="#32CD32" />
          <rect x="520" y="280" width="60" height="20" fill="#3CB371" />

          <circle cx="750" cy="100" r="30" fill="#FFD700" />
          <rect x="720" y="130" width="60" height="20" fill="#FFA500" />

          <line
            x1="150"
            y1="200"
            x2="350"
            y2="150"
            stroke="#FF4500"
            strokeWidth="5"
            className="animate-path"
          />
          <line
            x1="350"
            y1="150"
            x2="550"
            y2="250"
            stroke="#32CD32"
            strokeWidth="5"
            className="animate-path"
          />
          <line
            x1="550"
            y1="250"
            x2="750"
            y2="100"
            stroke="#4682B4"
            strokeWidth="5"
            className="animate-path"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-2xl">
        <h1
          className={`text-4xl md:text-3xl lg:text-2xl font-extrabold text-black mb-5 transform transition duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Discover Quality Products at <span className="text-orange">Mulya Bazzar</span>
        </h1>
        <p
          className={`text-base md:text-lg text-black/90 mb-6 transform transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Explore our curated collection of high-quality items, from fashion to home
          essentials. Find everything you need in one place.
        </p>
        <a
          href="/shop"
          className="inline-block bg-orange hover:bg-yellow text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
