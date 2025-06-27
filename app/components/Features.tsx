"use client";

import { useEffect, useState } from "react";
import {
  FaGavel,
  FaLock,
  FaBell,
  FaTruckLoading,
} from "react-icons/fa";

const featureList = [
  {
    icon: FaGavel,
    title: "Bid Management System",
    desc: "Engage in competitive bidding to secure the best deals on products. Our system ensures a fair and transparent bidding process.",
  },
  {
    icon: FaLock,
    title: "Escrow Payment Service",
    desc: "Transact with confidence using our secure escrow service. Payments are held safely until both parties confirm the successful completion of the transaction.",
  },
  {
    icon: FaBell,
    title: "Notification System",
    desc: "Stay informed with real-time notifications about bids, orders, and important updates. Never miss a critical moment in your transactions.",
  },
  {
    icon: FaTruckLoading,
    title: "Supply Chain Dashboard",
    desc: "Gain insights into the journey of your products from origin to delivery. Track progress, manage inventory, and optimize your operations.",
  },
];

const Features = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      id="features"
      className="py-20 bg-gray-50 text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-4">
          Explore Our Platform’s Capabilities
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-gray-700 mb-12">
          Mulya Bazzar offers a suite of powerful features designed to enhance your buying and selling experience. From secure transactions to real-time updates, we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`
                group relative bg-white border border-gray-200 rounded-lg p-6
                transform transition-all duration-500 ease-in-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards", animationName: visible ? "fadeUp" : "none", animationDuration: "600ms" }}
            >
              <div className="mb-4 inline-block text-black text-3xl transition-transform duration-500 group-hover:scale-110">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group:hover {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Features;
