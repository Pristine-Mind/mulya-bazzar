"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShoppingCart, Sparkles } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] text-center px-4 pt-0 -mt-16 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100/30"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              scale: [1, 1 + Math.random() * 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange-50 rounded-full border border-orange-100">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-800">Discover the best deals</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              Quality Products
            </span>
            <br />
            <span className="text-gray-900">at Unbeatable Prices</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Discover a world of premium products, handpicked just for you. Shop with confidence and enjoy fast delivery to your doorstep.
          </motion.p>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://appmulyabazzar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>Start Shopping</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#features"
              className="group inline-flex items-center px-6 py-4 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              <span>Learn More</span>
              <svg
                className="ml-2 h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-500"
          >
            {[
              { label: 'Fast Delivery', value: '24/7' },
              { label: 'Quality Products', value: '100%' },
              { label: 'Secure Payments', value: '100%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
                <div className="mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hidden lg:block absolute bottom-20 right-10 w-64 h-64 rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100"
        animate={floatingAnimation}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50"></div>
        <div className="relative z-10 p-4 h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <ShoppingCart className="w-16 h-16 text-orange-400" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">Featured Product</h3>
            <p className="text-sm text-gray-500 mt-1">Best Sellers</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
