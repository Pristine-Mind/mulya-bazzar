"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import feat1 from "../public/efficiency.avif";
import feat2 from "../public/transparency.avif";
import feat3 from "../public/trade.avif";

const features = [
  {
    title: "Efficiency",
    description: "Streamlined processes for quick and easy shopping and selling.",
    image: feat1,
    alt: "Bottles on a pale-green background",
  },
  {
    title: "Transparency",
    description: "Clear and honest information about products and transactions.",
    image: feat2,
    alt: "Dark-background product labels",
  },
  {
    title: "Fair Trade",
    description: "Commitment to ethical sourcing and equitable pricing.",
    image: feat3,
    alt: "Green-themed skincare products",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="py-6 px-0 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-start">
          <h2
            className={`text-4xl font-extrabold text-gray-900 mb-4 text-left border-l-4 border-orange pl-4 transform transition duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            About Mulya Bazzar
          </h2>

          <p
            className={`text-lg text-gray-700 mb-8 text-left transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Mulya Bazzar is a dynamic online marketplace dedicated to connecting buyers and sellers of fresh, high-quality goods. Our mission is to create an efficient and transparent platform that supports fair trade practices, ensuring both customers and vendors benefit from every transaction.
          </p>

          <a
            href="#learn-more"
            className={`inline-block px-6 py-3 mb-12 text-gray-900 font-semibold rounded-lg bg-yellow shadow-sm border border-yellow hover:bg-orange hover:text-white transition-transform duration-300 hover:scale-105 text-left ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, description, image, alt }, idx) => (
            <div key={idx} className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={alt}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
