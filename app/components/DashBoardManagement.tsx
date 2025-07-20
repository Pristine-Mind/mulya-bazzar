"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  User, 
  Users, 
  Package, 
  LineChart, 
  ListChecks, 
  PackageCheck,
  ArrowRight,
  BarChart3,
  LayoutDashboard,
  ShoppingCart,
  Warehouse,
  Package2
} from "lucide-react";

const dashboards = [
  {
    title: "Producer Dashboard",
    desc: "Manage your product listings, track performance, and engage with customers.",
    icon: User,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Customer Dashboard",
    desc: "View your order history, manage your profile, and track favorite products.",
    icon: Users,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Product Dashboard",
    desc: "Oversee your entire product catalog, update details, and monitor inventory.",
    icon: Package,
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    title: "Sales Analytics",
    desc: "Analyze sales trends, track revenue, and identify top-performing products.",
    icon: LineChart,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "Order Management",
    desc: "Process orders, track shipments, and handle returns efficiently.",
    icon: ShoppingCart,
    color: "text-rose-500",
    bgColor: "bg-rose-50"
  },
  {
    title: "Inventory Control",
    desc: "Monitor stock levels, set reorder points, and optimize inventory turnover.",
    icon: Package2,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Warehouse",
    desc: "Manage storage locations, track stock movements, and optimize space.",
    icon: Warehouse,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50"
  },
  {
    title: "Reports",
    desc: "Generate detailed reports on sales, inventory, and business performance.",
    icon: BarChart3,
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
];

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

const DashBoardManagement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full">
            Dashboard Suite
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Analytics & Control
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              At Your Fingertips
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive dashboards to manage every aspect of your business with real-time insights and intuitive controls.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {dashboards.map(({ title, desc, icon: Icon, color, bgColor }) => (
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
                Open Dashboard
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 mb-6">
            <LayoutDashboard className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your business operations?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get started with our comprehensive dashboard suite and take control of your business with powerful analytics and intuitive controls.
          </p>
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
              Schedule Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashBoardManagement;
