"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-11/12 mx-auto my-10 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${banner.img})` }}
          >
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center">
              <div>
                <h1 className="text-4xl font-bold mb-3">{banner.title}</h1>
                <p>{banner.subTitle}</p>
                <div className="mt-4 flex gap-4 justify-center">
                    <button className="py-3 px-6 bg-orange-600 font-bold rounded">Discover More</button>
                    <button className="py-3 px-6 rounded border border-orange-600">Latest Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-3">
        <button
          onClick={handlePrev}
          className="text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
