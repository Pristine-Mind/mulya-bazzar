"use client"; // For interactive client-side rendering
const Navbar = () => {
  return (
    <header className="text-black shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold">Mulya Bazzar</h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About Us</a></li>
            <li><a href="#features" className="hover:text-secondary">Features</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
