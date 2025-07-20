"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const TermsOfService = () => {
  const terms = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using the Mulya Bazzar platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.'
    },
    {
      title: '2. Description of Service',
      content: 'Mulya Bazzar provides a digital marketplace platform that connects buyers and sellers of agricultural and other products. Our services include but are not limited to product listings, bidding, and transaction processing.'
    },
    {
      title: '3. User Accounts',
      content: 'To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.'
    },
    {
      title: '4. Product Listings',
      content: 'Sellers are responsible for the accuracy of their product listings, including descriptions, prices, and availability. Mulya Bazzar reserves the right to remove any listings that violate our policies.'
    },
    {
      title: '5. Transactions',
      content: 'All transactions are between buyers and sellers. Mulya Bazzar acts as an intermediary and is not responsible for the quality, safety, or legality of items listed on the platform.'
    },
    {
      title: '6. Fees and Payments',
      content: 'Certain services may be subject to fees. All fees will be clearly displayed before you use any paid service. Payments are processed through secure third-party payment processors.'
    },
    {
      title: '7. User Conduct',
      content: 'You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the platform. Prohibited activities include fraud, misrepresentation, and intellectual property infringement.'
    },
    {
      title: '8. Intellectual Property',
      content: 'All content on the Mulya Bazzar platform, including text, graphics, logos, and software, is the property of Mulya Bazzar or its licensors and is protected by intellectual property laws.'
    },
    {
      title: '9. Limitation of Liability',
      content: 'Mulya Bazzar shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.'
    },
    {
      title: '10. Modifications to Terms',
      content: 'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.'
    },
    {
      title: '11. Governing Law',
      content: 'These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Mulya Bazzar operates.'
    },
    {
      title: '12. Contact Information',
      content: 'For any questions about these Terms of Service, please contact us at support@mulyabazzar.com.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <div className="prose prose-orange max-w-none">
              <p className="text-gray-600 mb-8">
                Welcome to Mulya Bazzar. These Terms of Service ("Terms") govern your access to and use of the Mulya Bazzar platform, including any content, functionality, and services offered on or through mulyabazzar.com.
              </p>

              <div className="space-y-8">
                {terms.map((term, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    className="border-l-4 border-orange-200 pl-4 py-2"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{term.title}</h2>
                    <p className="text-gray-600">{term.content}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 p-6 bg-orange-50 rounded-lg"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                  Acceptance of Terms
                </h3>
                <p className="text-gray-600">
                  By using Mulya Bazzar, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
                </p>
              </motion.div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Mulya Bazzar. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
