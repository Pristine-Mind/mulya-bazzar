"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import feat1 from "../public/efficiency.avif";
import feat2 from "../public/transparency.avif";
import feat3 from "../public/trade.avif";

const features = [
  {
    title: "Efficiency",
    description: "Streamlined processes for quick and easy shopping and selling.",
    image: feat1,
    alt: "Bottles on a pale-green background",
    icon: <CheckCircle className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Transparency",
    description: "Clear and honest information about products and transactions.",
    image: feat2,
    alt: "Dark-background product labels",
    icon: <CheckCircle className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Fair Trade",
    description: "Commitment to ethical sourcing and equitable pricing.",
    image: feat3,
    alt: "Green-themed skincare products",
    icon: <CheckCircle className="w-6 h-6 text-orange-500" />
  },
];

const About = () => {
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
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span 
            variants={item}
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full"
          >
            Our Mission
          </motion.span>
          
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Building a Better Marketplace
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              For Everyone
            </span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Mulya Bazzar is more than just a marketplace. We're a community that values quality, transparency, and fair trade in every transaction.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map(({ title, description, image, alt, icon }, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <h3 className="text-xl font-bold">{title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{description}</p>
                <button 
                  className="mt-4 inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  aria-label={`Learn more about ${title}`}
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={item}
          className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience the difference?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join thousands of satisfied customers and sellers who trust Mulya Bazzar for their online marketplace needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://appmulyabazzar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-gray-700 font-medium bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
