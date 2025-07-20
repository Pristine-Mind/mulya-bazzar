"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Link from "next/link";
import { Mail, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        "service_m3pq0kk",
        "template_w5bysh8",
        { 
          to_email: email,
          from_name: "Mulya Bazzar",
          message: "Thank you for registering with Mulya Bazzar!"
        },
        "42gma15X3fCcZ1vY-"
      );
      
      setStatus({ 
        type: 'success', 
        message: 'Registration successful! Check your email for confirmation.' 
      });
      setEmail("");
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
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
              Join Mulya Bazzar Today
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Register now to access our platform and take your business to the next level with our comprehensive tools and services.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-orange-50">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Email Address
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-200"
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                  />
                </div>
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
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${
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
                      Get Started
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
            <a href="mailto:support@mulyabazzar.com" className="font-medium text-orange-600 hover:text-orange-500">
              support@mulyabazzar.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
