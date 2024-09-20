"use client";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 text-center py-16 px-4">
      {/* Registration Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Registration</h1>
      <p className="text-lg text-gray-700 mb-8">
        Join Us Today – Empower Your Business and Secure Your Future!
      </p>

      {/* Registration Form */}
      <form className="w-full max-w-sm">
        {/* Email Input */}
        <div className="flex items-center border-b border-gray-400 py-2 mb-6">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="jimi.hendrix@purplehaze.com"
            aria-label="Email"
          />
          <button
            className="flex-shrink-0 bg-green-200 hover:bg-green-300 text-sm text-gray-800 font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-4">
          <input
            id="policy"
            type="checkbox"
            className="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-400"
          />
          <label htmlFor="policy" className="ml-2 text-sm text-gray-600">
            I agree with the{' '}
            <a href="#" className="text-gray-900 font-semibold hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
      </form>
    </section>
  );
};

export default Contact;
