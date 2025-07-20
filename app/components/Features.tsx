"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Gavel, 
  ShieldCheck, 
  Bell, 
  PackageSearch,
  ArrowRight,
  Zap,
  TrendingUp,
  BarChart2
} from "lucide-react";

const featureList = [
  // {
  //   icon: Gavel,
  //   title: "Bid Management",
  //   desc: "Engage in competitive bidding with our transparent auction system. Secure the best deals with real-time updates and fair play.",
  //   color: "text-blue-500",
  //   bgColor: "bg-blue-50"
  // },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Transact with confidence using our secure escrow service. Your funds are protected until your order is complete.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    desc: "Stay informed with instant notifications about bids, orders, and important market updates.",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: PackageSearch,
    title: "Inventory Tracking",
    desc: "Monitor your products from origin to delivery with our comprehensive tracking system.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Zap,
    title: "Quick Processing",
    desc: "Experience lightning-fast order processing and fulfillment with our optimized system.",
    color: "text-rose-500",
    bgColor: "bg-rose-50"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    desc: "Access valuable data and analytics to make informed buying and selling decisions.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    icon: BarChart2,
    title: "Performance Metrics",
    desc: "Track your business performance with detailed analytics and reporting tools.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50"
  },
  {
    icon: ShieldCheck,
    title: "24/7 Support",
    desc: "Our dedicated support team is always ready to assist you with any questions or issues.",
    color: "text-green-500",
    bgColor: "bg-green-50"
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Tools for
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              Your Business Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our comprehensive suite of features can transform your buying and selling experience.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featureList.map(({ icon: Icon, title, desc, color, bgColor }, idx) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${bgColor}`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-700 transition-colors">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Ready to experience all these features and more?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://appmulyabazzar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-gray-700 font-medium bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
