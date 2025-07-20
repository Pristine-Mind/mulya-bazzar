"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Handshake, 
  PackageOpen, 
  Package, 
  Truck, 
  Smile, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const supplySteps = [
  {
    icon: Handshake,
    title: "Supplier Partnership",
    desc: "We carefully select suppliers who meet our quality standards.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: PackageOpen,
    title: "Inventory Management",
    desc: "We maintain optimal stock levels to ensure product availability.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Package,
    title: "Order Fulfillment",
    desc: "Orders are processed swiftly and accurately.",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    desc: "We partner with reliable carriers for timely delivery.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    desc: "We strive to exceed customer expectations at every step.",
    color: "text-rose-500",
    bgColor: "bg-rose-50"
  },
];

const SupplyChain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="supply-chain" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Seamless Supply Chain
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              From Source to You
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our efficient supply chain ensures quality products reach you faster and fresher than ever before.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-orange-100 via-orange-300 to-orange-100"></div>
          
          <div className="space-y-8">
            {supplySteps.map(({ icon: Icon, title, desc, color, bgColor }, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div 
                  key={idx}
                  variants={item}
                  className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 px-4 py-2 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-1 rounded-lg ${bgColor} mb-2`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                  
                  <div className="w-1/2 px-4">
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                      <div className={`absolute inset-0 ${bgColor} opacity-30`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`p-6 rounded-full ${bgColor} bg-opacity-50`}>
                          <Icon className={`w-10 h-10 ${color}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-orange-500 z-10"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience our seamless service?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust our efficient supply chain for their shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://appmulyabazzar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
              >
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-gray-700 font-medium bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupplyChain;
