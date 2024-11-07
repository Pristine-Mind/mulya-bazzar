"use client";

import { useEffect, useState } from "react";
import { FaUser, FaDollarSign, FaShoppingCart, FaBox, FaClipboardList, FaWarehouse } from "react-icons/fa";

const DashBoardManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const features = [
    {
      title: "Producer",
      description: "A platform for producers to manage and distribute their products effectively, connecting with customers in a streamlined manner.",
      icon: <FaUser size={32} />,
      color: "#FF6B6B",
    },
    {
      title: "Customer",
      description: "A comprehensive view for customers to place orders, track deliveries, and engage with producers directly.",
      icon: <FaClipboardList size={32} />,
      color: "#A29BFE",
    },
    {
      title: "Product",
      description: "Manage your product catalog, including product details, pricing, and availability in an intuitive way.",
      icon: <FaBox size={32} />,
      color: "#1FC8DB",
    },
    {
      title: "Sales",
      description: "Track sales and revenue generated through different channels, with comprehensive insights.",
      icon: <FaDollarSign size={32} />,
      color: "#FDCB6E",
    },
    {
      title: "Order",
      description: "Manage customer orders, ensuring they are processed, tracked, and fulfilled seamlessly.",
      icon: <FaShoppingCart size={32} />,
      color: "#00B894",
    },
    {
      title: "Stock",
      description: "Monitor and manage stock levels to ensure products are always available when needed, with alerts for low stock.",
      icon: <FaWarehouse size={32} />,
      color: "#55EFC4",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 text-white"
      style={{ backgroundColor: "#F8DC75" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-black">
          Powerful supply chain management in the palm of your hand.
        </h1>
        <p className="text-xl mb-16 max-w-3xl mx-auto text-black">
          We live in an increasingly mobile-driven world. Mobile functionality is vital for effective supply chain management, helping producers, customers, and stakeholders connect seamlessly and operate efficiently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition transform hover:scale-105"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default DashBoardManagement;
