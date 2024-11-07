"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DiscipleMakingProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [lastClicked, setLastClicked] = useState(null); // Track last clicked button

  const steps = [
    { title: "Supplier Partnership", description: "Building strong relationships with suppliers for a seamless supply chain." },
    { title: "Inventory Management", description: "Ensuring optimal inventory levels to meet demand without overstocking." },
    { title: "Order Fulfillment", description: "Efficiently managing customer orders to provide a smooth buying experience." },
    { title: "Logistics & Delivery", description: "Coordinating logistics to ensure timely and accurate delivery." },
    { title: "Customer Satisfaction", description: "Focusing on customer feedback and satisfaction to improve service quality." },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setLastClicked("next");
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setLastClicked("prev");
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 relative min-h-[70vh] bg-gradient-to-br from-blue-300 to-light-blue text-center" >
      <div className="flex-1 flex flex-col items-center relative mb-8 md:mb-0">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[35rem] md:h-[35rem] relative flex items-center justify-center">
          <svg viewBox="0 0 240 240" className="w-full h-full">
            <circle
              cx="120"
              cy="120"
              r="100"
              fill="none"
              stroke="#926AA6"
              stroke-width="4"
            />
            {steps.map((step, index) => {
              const angle = (2 * Math.PI * index) / steps.length;
              const x = 120 + 100 * Math.cos(angle);
              const y = 120 + 100 * Math.sin(angle);
              return (
                <text
                  key={index}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fill={index === currentStep ? "#000" : "#888"}
                  fontWeight={index === currentStep ? "bold" : "normal"}
                  fontSize="6"
                >
                  {step.title}
                </text>
              );
            })}
          </svg>
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
    </section>
  );
};

export default DiscipleMakingProcess;
