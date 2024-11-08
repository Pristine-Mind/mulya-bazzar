"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";

const DiscipleMakingProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);

  const steps = [
    { title: "Supplier Partnership", description: "Building strong relationships with suppliers for a seamless supply chain." },
    { title: "Inventory Management", description: "Ensuring optimal inventory levels to meet demand without overstocking." },
    { title: "Order Fulfillment", description: "Efficiently managing customer orders to provide a smooth buying experience." },
    { title: "Logistics & Delivery", description: "Coordinating logistics to ensure timely and accurate delivery." },
    { title: "Customer Satisfaction", description: "Focusing on customer feedback and satisfaction to improve service quality." },
  ];

  const colors = ["#4178BE", "#3AB89C", "#C7851C", "#D4C317", "#3232CC"];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setLastClicked("next");
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setLastClicked("prev");
  };

  const getCoordinates = (index) => {
    const angle = (2 * Math.PI * index) / steps.length;
    const radius = 140; // Increased radius to spread items further apart
    const x = 140 + radius * Math.cos(angle);
    const y = 140 + radius * Math.sin(angle);
    return { x, y };
  };

  const { x, y } = getCoordinates(currentStep);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-8 px-4 relative min-h-[70vh] bg-gradient-to-br from-blue-300 to-light-blue text-center overflow-visible">
      <div className="flex-1 flex flex-col items-center relative mb-8 md:mb-0 overflow-visible">
        <div className="w-80 h-80 sm:w-80 sm:h-80 md:w-[35rem] md:h-[35rem] relative flex items-center justify-center overflow-visible">
          <svg viewBox="0 0 280 280" className="w-full h-full overflow-visible">
            {steps.map((step, index) => {
              const { x, y } = getCoordinates(index);
              return (
                <text
                  key={index}
                  x={x}
                  y={y}
                  dy="0.35em"
                  textAnchor="middle"
                  fill={index === currentStep ? "#000" : "#888"}
                  fontWeight={index === currentStep ? "bold" : "normal"}
                  fontSize="6" // Reduced font size for better spacing
                  className={index === currentStep ? "animate-pulse" : ""}
                >
                  {step.title}
                </text>
              );
            })}
          </svg>
          <div
            className="absolute w-40 h-40 rounded-full flex flex-col items-center justify-center text-white text-xl transition-transform duration-500 z-10"
            style={{
              transform: `translate(${x - 140}px, ${y - 140}px)`,
              backgroundColor: colors[currentStep],
              padding: '10px',
            }}
          >
            <FaUser />
            <span className="mt-2 text-sm font-bold">{steps[currentStep].title}</span>
          </div>
        </div>
      </div>
      <div className="flex-1 text-center md:text-left md:pl-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Essential Steps in Supply Chain Excellence
        </h2>
        <h5 className="text-xl sm:text-2xl font-bold mb-3">{steps[currentStep].title}</h5>
        <p className="text-md sm:text-lg text-gray-600 mb-6">
          {steps[currentStep].description}
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <button
            onClick={handlePrev}
            className={`p-2 sm:p-3 rounded-full transition duration-300 ${
              lastClicked === "prev" ? "bg-blue-700 text-white" : "bg-blue-200 text-white hover:bg-blue-700"
            }`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className={`p-2 sm:p-3 rounded-full transition duration-300 ${
              lastClicked === "next" ? "bg-blue-700 text-white" : "bg-blue-200 text-white hover:bg-blue-700"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: textPulse 1.5s ease-in-out infinite;
        }
        @keyframes textPulse {
          0%, 100% {
            transform: scale(1);
            fill-opacity: 1;
          }
          50% {
            transform: scale(1.1);
            fill-opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default DiscipleMakingProcess;
