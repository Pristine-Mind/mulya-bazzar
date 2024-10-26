"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m3pq0kk",
        "template_w5bysh8",
        { email: email },
        "42gma15X3fCcZ1vY-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Registration successful! Thank you for subscribing.");
        },
        (error) => {
          console.log(error.text);
          setMessage("Oops! Something went wrong. Please try again.");
        }
      );

    setEmail("");
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center bg-gray-100 text-center py-16 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Registration</h1>
      <p className="text-lg text-gray-700 mb-8">
        Join Us Today – Empower Your Business and Secure Your Future!
      </p>

      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-gray-400 py-2 mb-6">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="your.email@example.com"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="flex-shrink-0 text-sm text-gray-800 font-bold py-2 px-4 rounded transform transition-transform duration-500 hover:scale-105" style={{ backgroundColor: '#ffbd59' }}
            type="submit"
          >
            Register
          </button>
        </div>
      </form>

      {message && <p className="text-green-500">{message}</p>}
    </section>
  );
};

export default Contact;
