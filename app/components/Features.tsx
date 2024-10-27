"use client";

import { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverEffect, setHoverEffect] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseMove = (e, index) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 10;

    setHoverEffect((prevHoverEffect) => ({
      ...prevHoverEffect,
      [index]: { x, y, scale: 1.05 },
    }));
  };

  const handleMouseLeave = (index) => {
    setHoverEffect((prevHoverEffect) => ({
      ...prevHoverEffect,
      [index]: { x: 0, y: 0, scale: 1 },
    }));
  };

  return (
    <section
      id="features"
      className="py-16 text-gray-900"
      style={{ backgroundColor: "#ffbd59" }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Features</h1>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Wide Variety of Products", "Secure Payments", "Fast Delivery"].map(
          (feature, index) => (
            <div
              key={feature}
              className={`feature-box text-center bg-white p-6 rounded-lg shadow-lg transition-all duration-700 ${
                isVisible ? "animate-circular-appear" : "opacity-0 scale-0 rotate-45"
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transform: hoverEffect[index]
                  ? `translate(${hoverEffect[index].x}px, ${hoverEffect[index].y}px) scale(${hoverEffect[index].scale})`
                  : "scale(1)",
                transition: "transform 0.2s ease-out",
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={`public/images/icon${index + 1}.svg`}
                alt={feature}
                className="mx-auto mb-4 w-16 h-16 transform transition-transform duration-500"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p className="text-gray-700">
                {index === 0 &&
                  "Discover an extensive selection of products at unbeatable prices, carefully curated to meet all your needs. Shop now and enjoy great deals on quality items across a wide range of categories."}
                {index === 1 &&
                  "Shop with confidence knowing that your transactions are protected by our secure payment options. We prioritize your privacy and security, ensuring a safe and seamless shopping experience every time."}
                {index === 2 &&
                  "Receive your products swiftly and reliably with our fast and on-time delivery service. We work hard to ensure your orders arrive exactly when you need them, making your shopping experience seamless and stress-free."}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Features;
