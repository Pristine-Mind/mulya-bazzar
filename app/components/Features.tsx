"use client";

import { useEffect, useState } from "react";
import { FaGavel, FaLock, FaBell, FaTruckLoading } from 'react-icons/fa';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverEffect, setHoverEffect] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseMove = (e, index) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 10;

    setHoverEffect((prevHoverEffect) => ({
      ...prevHoverEffect,
      [index]: { x, y, scale: 1.08 },
    }));
  };

  const handleMouseLeave = (index) => {
    setHoverEffect((prevHoverEffect) => ({
      ...prevHoverEffect,
      [index]: { x: 0, y: 0, scale: 1 },
    }));
  };

  return (
    <section
      id="features"
      className="py-20 text-gray-900"
      style={{ backgroundColor: "#F7F7F9" }}
    >
      <h1 className="text-5xl font-extrabold mb-12 text-center text-black">
        Features
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Bid Management System",
            description:
              "Manage bids effectively with a streamlined system that ensures transparency and fairness throughout the bidding process.",
            icon: <FaGavel size={48} color="white" />,
            backgroundColor: "#c76706",
            sizeClass: "lg:col-span-1",
          },
          {
            title: "Escrow Payment Service",
            description:
              "Secure transactions with our integrated escrow payment service, providing trust and safety for buyers and sellers.",
            icon: <FaLock size={64} color="white" />,
            backgroundColor: "#3898ec",
            sizeClass: "lg:col-span-2",
          },
          {
            title: "Notification System",
            description:
              "Stay informed with real-time notifications, keeping you updated on all important events and activities.",
            icon: <FaBell size={48} color="white" />,
            backgroundColor: "#22b573",
            sizeClass: "lg:col-span-1",
          },
          {
            title: "Supply Chain Dashboard",
            description:
              "Get a comprehensive view of your supply chain operations with our intuitive dashboard, designed to enhance efficiency and decision-making.",
            icon: <FaTruckLoading size={64} color="white" />,
            backgroundColor: "#fdce76",
            sizeClass: "lg:col-span-2",
          },
        ].map((feature, index) => (
          <div
            key={feature.title}
            className={`feature-box text-center p-8 rounded-xl shadow-xl transition-all duration-700 ease-in-out transform hover:shadow-2xl ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-12"
            } ${feature.sizeClass}`}
            style={{
              animationDelay: `${index * 200}ms`,
              transform: hoverEffect[index]
                ? `translate(${hoverEffect[index].x}px, ${hoverEffect[index].y}px) scale(${hoverEffect[index].scale})`
                : "scale(1)",
              transition: "transform 0.2s ease-out",
              backgroundColor: feature.backgroundColor,
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full" style={{ backgroundColor: feature.backgroundColor }}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
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

export default Features;
