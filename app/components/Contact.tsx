"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Link from "next/link";
import { Building2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    website: "",
    phone: "",
    email: "",
    category: "",
    aboutCompany: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const categories = [
    "Electronics & Technology", "Fashion & Clothing", "Home & Garden", "Beauty & Personal Care",
    "Sports & Fitness", "Books & Stationery", "Toys & Games", "Jewelry & Accessories",
    "Food & Beverages", "Health & Wellness", "Baby & Kids", "Automotive",
    "Arts & Crafts", "Pet Supplies", "Music & Instruments", "Travel & Luggage",
    "Kitchen & Dining", "Mobile & Tablets", "Computers & Laptops", "Cameras & Photography",
    "Watches", "Bags & Luggage", "Shoes & Footwear", "Groceries & Essentials",
    "Furniture & Decor", "Appliances", "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName.trim() || !formData.address.trim() || !formData.phone.trim()) {
      setStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      await emailjs.send(
        "service_zdl6w6j",
        "template_84nmbpy",
        { 
          to_email: "mulyabazzar@gmail.com",
          business_name: formData.businessName,
          address: formData.address,
          website: formData.website,
          phone: formData.phone,
          email: formData.email,
          category: formData.category,
          about_company: formData.aboutCompany,
          from_name: "Mulya Bazzar Business Registration",
          from_email: formData.email,
        },
        "VKQB6ni09wJ5aEPZ1"
      );
      
      setStatus({ 
        type: 'success', 
        message: 'Business registration submitted successfully! We will contact you soon.' 
      });
      setFormData({
        businessName: "",
        address: "",
        website: "",
        phone: "",
        email: "",
        category: "",
        aboutCompany: ""
      });
      formRef.current?.reset();
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full">
            Business Registration
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Add Your Business to 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              Mulya Bazzar
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join our platform to reach more customers and grow your business with our comprehensive tools and services.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-orange-50">
              <Building2 className="w-8 h-8 text-orange-600" />
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Business Name *
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black"
                  placeholder="Enter your business name"
                  disabled={isSubmitting}
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Address *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black"
                  placeholder="Enter your business address"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black"
                  placeholder="https://yourbusiness.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Phone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black"
                  placeholder="Enter your business phone number"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black"
                  placeholder="Enter your business email"
                  disabled={isSubmitting}
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black bg-white"
                  disabled={isSubmitting}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* About Company */}
              <div>
                <label htmlFor="aboutCompany" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  About Company
                </label>
                <textarea
                  id="aboutCompany"
                  name="aboutCompany"
                  rows={4}
                  value={formData.aboutCompany}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200 text-black resize-none"
                  placeholder="Tell us about your business"
                  disabled={isSubmitting}
                />
              </div>

              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-lg text-sm ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-800' 
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        {status.type === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">
                          {status.type === 'success' ? 'Success!' : 'Error'}
                        </p>
                        <p className="mt-1">{status.message}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Register Business
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              By registering, you agree to our{' '}
              <Link 
                href="/terms" 
                className="font-medium text-orange-600 hover:text-orange-500 hover:underline"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link 
                href="/privacy" 
                className="font-medium text-orange-600 hover:text-orange-500 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Have questions?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our support team is here to help. Contact us at{' '}
            <a href="mailto:mulyabazzar@gmail.com" className="font-medium text-orange-600 hover:text-orange-500">
              mulyabazzar@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
