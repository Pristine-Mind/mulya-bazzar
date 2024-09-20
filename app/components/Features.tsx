"use client";

const Features = () => {
  return (
    <section id="features" className="py-16 bg-emerald-500 text-gray-900">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="feature-box text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="public/images/icon1.svg"
            alt="Wide Variety of Products"
            className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500 hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2">Wide Variety of Products</h3>
          <p className="text-gray-700">
            Find a wide variety of products at the best prices.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-box text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="public/images/icon3.svg"
            alt="Easy Transactions"
            className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500 hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2">Easy Transactions</h3>
          <p className="text-gray-700">
            Seamlessly trade goods with our secure and fast transaction system.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-box text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="public/images/icon4.svg"
            alt="Connect with Buyers"
            className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500 hover:scale-110"
          />
          <h3 className="text-xl font-bold mb-2">Connect with Buyers</h3>
          <p className="text-gray-700">
            Grow your business by connecting with buyers across the country.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
