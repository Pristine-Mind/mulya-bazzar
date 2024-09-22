"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="about" className="py-16 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-6 text-center transform transition duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          About Mulya Bazzar
        </h2>
        <p
          className={`text-lg max-w-3xl mx-auto text-center transform transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Mulya Bazzar is a revolutionary online marketplace that bridges the gap
          between buyers and sellers, creating an efficient and transparent platform for
          the exchange of fresh goods. Whether you are a small-scale farmer, a local
          vendor, or a large business, Mulya Bazzar empowers you to sell your produce with
          ease, reaching a wider audience while ensuring fair trade practices.
        </p>
      </div>
    </section>
  );
};

export default About;
