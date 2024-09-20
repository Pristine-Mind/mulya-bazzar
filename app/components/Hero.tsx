"use client"; // Marks this as a client component for hooks and client-side rendering

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[70vh] bg-gradient-to-br from-primary to-dark text-center px-4">
      {/* Hero Title */}
      <h1 className="text-4xl font-extrabold text-secondary mb-4 transform transition duration-500 hover:scale-105">
        Mulya Bazzar
      </h1>

      {/* Hero Subtitle */}
      <p className="text-lg text-light max-w-lg mb-4 transform transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in">
        Empowering Buyers, Connecting Markets
      </p>

      {/* Call to Action Button with Reduced Size */}
      <div className="mt-6 px-3 py-2 bg-secondary text-dark font-semibold rounded-md shadow-lg cursor-pointer transform transition-transform duration-500 hover:scale-110 hover:bg-light hover:text-dark">
        Explore the Marketplace
      </div>
    </section>
  );
};

export default Hero;
