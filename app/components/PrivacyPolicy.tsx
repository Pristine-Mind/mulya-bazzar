"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, User, Mail, Server, Cookie } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to Mulya Bazzar. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our platform and tell you about your privacy rights and how the law protects you.'
    },
    {
      title: '2. Information We Collect',
      content: 'We may collect, use, store, and transfer different kinds of personal data about you, including:\n\n• Identity Data: Name, username, or similar identifier\n• Contact Data: Billing address, delivery address, email, and phone numbers\n• Financial Data: Payment card details (processed through secure third-party payment processors)\n• Transaction Data: Details about payments and other details of products you have purchased\n• Technical Data: Internet protocol (IP) address, login data, browser type and version, time zone setting, and location\n• Profile Data: Username and password, purchases or orders, interests, preferences, feedback, and survey responses\n• Usage Data: Information about how you use our platform and services',
      icon: <Server className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
    },
    {
      title: '3. How We Use Your Data',
      content: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:\n\n• To register you as a new customer\n• To process and deliver your orders\n• To manage our relationship with you\n• To enable you to participate in surveys\n• To improve our website, products/services, and customer relationships\n• To recommend products or services that may be of interest to you\n• For data analysis and platform improvement\n• For fraud prevention and detection',
      icon: <Lock className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
    },
    {
      title: '4. Data Security',
      content: 'We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.',
      icon: <ShieldCheck className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
    },
    {
      title: '5. Data Retention',
      content: 'We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.'
    },
    {
      title: '6. Your Legal Rights',
      content: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:\n\n• Request access to your personal data\n• Request correction of your personal data\n• Request erasure of your personal data\n• Object to processing of your personal data\n• Request restriction of processing your personal data\n• Request transfer of your personal data\n• Right to withdraw consent',
      icon: <User className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
    },
    {
      title: '7. Cookies and Tracking Technologies',
      content: 'We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.',
      icon: <Cookie className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
    },
    {
      title: '8. Third-Party Links',
      content: 'Our platform may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are under 18, please do not provide any information on this platform.'
    },
    {
      title: '10. Changes to This Privacy Policy',
      content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.'
    },
    {
      title: '11. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at:',
      contact: true
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
              Privacy Policy
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
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    className="border-l-4 border-orange-200 pl-4 py-2"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      {section.icon || <span className="w-5 h-5 mr-2"></span>}
                      {section.title}
                    </h2>
                    {section.contact ? (
                      <div className="mt-2">
                        <p className="text-gray-600 mb-2">{section.content}</p>
                        <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                          <div className="flex items-start">
                            <Mail className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-gray-900">Email:</h3>
                              <a href="mailto:mulyabazzar@gmail.com" className="text-orange-600 hover:text-orange-700">
                                mulyabazzar@gmail.com
                              </a>
                              <p className="mt-2 text-sm text-gray-500">
                                We typically respond within 1-2 business days.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 p-6 bg-orange-50 rounded-lg"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-orange-600 mr-2" />
                  Your Privacy Matters
                </h3>
                <p className="text-gray-600">
                  We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us at privacy@mulyabazzar.com.
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

export default PrivacyPolicy;
