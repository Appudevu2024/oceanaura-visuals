import React from "react";
import AboutImage from "../assets/about.jfif";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="w-full bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-white">

     
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <img
          src={AboutImage}
          alt="About Oceanaura"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Oceanaura Visuals
          </h1>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-10">

     
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Our Story
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Oceanaura Visuals was born from a passion to capture real emotions and
            timeless moments. We believe every story is unique, and we are here to
            preserve it with creativity and cinematic storytelling.
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

       
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            We Master In Documenting ...
          </h2>
          <Card />
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

       
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We focus on storytelling, emotion, and cinematic quality. Every frame is
            carefully crafted to reflect your special moments with elegance and
            creativity.
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

      
        <div className="text-center px-2">
          <h3 className="text-base sm:text-xl md:text-2xl font-semibold mb-4">
            Let’s create something beautiful together
          </h3>

          <Link to="/contact">
            <button
              className="bg-white text-black 
              dark:bg-gray-800 dark:text-white 
              hover:bg-gray-200 dark:hover:bg-gray-700 
              px-4 sm:px-6 py-2 sm:py-3 
              text-sm sm:text-base 
              rounded-full transition shadow-md hover:scale-105"
            >
              Contact Us
            </button>
          </Link>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

      </div>
    </div>
  );
};

export default AboutPage;