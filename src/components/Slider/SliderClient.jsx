"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderClient = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Wait for images to load
  useEffect(() => {
    const imgPromises = banners.map(
      (banner) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = banner.img;
          img.onload = resolve;
          img.onerror = resolve;
        })
    );
    Promise.all(imgPromises).then(() => setLoading(false));
  }, [banners]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (loading) return; // don't slide while loading
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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

export default SliderClient;
