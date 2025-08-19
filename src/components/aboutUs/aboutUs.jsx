"use client";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 pt-20 pb-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Images */}
        <div className="relative">
          <Image
            src="https://i.postimg.cc/Jnrd9RYr/Rectangle-4.png"
            alt="Mechanic"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <Image
            src="https://i.postimg.cc/tgtMSs5v/Rectangle-5.png"
            alt="Car Tools"
            width={220}
            height={220}
            className="absolute bottom-[-30px] left-[250px] rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2">About Us</h4>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            We are qualified <br /> &amp; of experience in this field
          </h2>
          <p className="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </p>
          <p className="text-gray-600 mb-6">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
