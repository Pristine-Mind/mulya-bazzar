"use client";

import {
  FaHandshake,
  FaBoxOpen,
  FaBoxes,
  FaTruck,
  FaSmile,
} from "react-icons/fa";

const supplySteps = [
  {
    icon: FaHandshake,
    title: "Supplier Partnership",
    desc: "We carefully select suppliers who meet our quality standards.",
  },
  {
    icon: FaBoxOpen,
    title: "Inventory Management",
    desc: "We maintain optimal stock levels to ensure product availability.",
  },
  {
    icon: FaBoxes,
    title: "Order Fulfillment",
    desc: "Orders are processed swiftly and accurately.",
  },
  {
    icon: FaTruck,
    title: "Logistics & Delivery",
    desc: "We partner with reliable carriers for timely delivery.",
  },
  {
    icon: FaSmile,
    title: "Customer Satisfaction",
    desc: "We strive to exceed customer expectations at every step.",
  },
];

const OurSupplyChain = () => (
  <section id="supply-chain" className="py-16 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Our Supply Chain
      </h2>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300" />

        <ul className="space-y-10">
          {supplySteps.map(({ icon: Icon, title, desc }, idx) => (
            <li
              key={idx}
              className="
                group relative flex items-start pl-12 py-4 
                rounded-md 
                hover:bg-gray-50 
                transition-all duration-500 ease-in-out
              "
            >
              <div
                className="
                  absolute left-0 mt-1 flex h-8 w-8 items-center justify-center 
                  rounded-full bg-white ring-1 ring-gray-300 
                  group-hover:ring-orange-400 
                  group-hover:scale-110 
                  transition-all duration-500 ease-in-out
                  will-change-transform
                "
              >
                <Icon
                  className="
                    h-5 w-5 text-gray-800 
                    group-hover:text-orange-500 
                    transition-colors duration-500 ease-in-out
                  "
                />
              </div>

              <div className="space-y-1">
                <h3
                  className="
                    text-lg font-semibold text-gray-900 
                    group-hover:text-gray-800 
                    group-hover:translate-x-2 
                    transition-all duration-500 ease-in-out
                    will-change-transform
                  "
                >
                  {title}
                </h3>
                <p
                  className="
                    text-gray-600 
                    group-hover:text-gray-700 
                    transition-colors duration-500 ease-in-out
                  "
                >
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OurSupplyChain;
