"use client";

import { useEffect, useState } from "react";
import {
  FaUser,
  FaUsers,
  FaBox,
  FaChartLine,
  FaClipboardList,
  FaBoxes,
} from "react-icons/fa";

const dashboards = [
  {
    title: "Producer Dashboard",
    desc: "Manage your product listings, track performance, and engage with customers.",
    icon: FaUser,
  },
  {
    title: "Customer Dashboard",
    desc: "View your order history, manage your profile, and track your favorite products.",
    icon: FaUsers,
  },
  {
    title: "Product Dashboard",
    desc: "Oversee your entire product catalog, update details, and monitor inventory levels.",
    icon: FaBox,
  },
  {
    title: "Sales Dashboard",
    desc: "Analyze sales trends, track revenue, and identify top-performing products.",
    icon: FaChartLine,
  },
  {
    title: "Orders Dashboard",
    desc: "Manage incoming and outgoing orders, track shipments, and handle returns.",
    icon: FaClipboardList,
  },
  {
    title: "Stock Management Dashboard",
    desc: "Monitor stock levels, set reorder points, and optimize inventory turnover.",
    icon: FaBoxes,
    colStartLg: 1,
  },
];

const DashBoardManagement = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="dashboard" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Dashboard Management
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {dashboards.map((d, i) => (
            <div
              key={d.title}
              className={`
                bg-white border border-gray-200 rounded-lg p-6 flex flex-col 
                transition-transform duration-300 ease-in-out
                hover:shadow-lg hover:-translate-y-1
                ${d.colStartLg ? `lg:col-start-${d.colStartLg}` : ""}
              `}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 100}ms`,
                transitionProperty: 'opacity, transform',
              }}
            >
              <div className="text-2xl text-gray-800 mb-4">
                <d.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {d.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashBoardManagement;
