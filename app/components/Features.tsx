"use client";

import { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="features" className="py-16 bg-emerald-500 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Features
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className={`feature-box text-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="public/images/icon1.svg"
            alt="Wide Variety of Products"
            className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Wide Variety of Products</h3>
          <p className="text-gray-700">
            Find a wide variety of products at the best prices.
          </p>
        </div>

        <div
          className={`feature-box text-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="public/images/icon3.svg"
            alt="Secure Payments"
            className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
          <p className="text-gray-700">
            Shop with confidence using our secure payment options.
          </p>
        </div>

        <div
          className={`feature-box text-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="public/images/icon4.svg"
            alt="Fast Delivery"
            className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <p className="text-gray-700">
            Receive your products quickly and on time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
