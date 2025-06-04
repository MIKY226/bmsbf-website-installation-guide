"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1579247/pexels-photo-1579247.jpeg"
          alt="Mining operations"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mt-16 container mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Burkina Mining Services
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
          Leading the way in professional mining services with excellence and innovation
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary text-lg"
          >
            Our Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-secondary text-lg"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
