import React from "react";
import AboutImage from "/images/about.jfif";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="w-full bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-10">

       
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Story
          </h1>
        </div>

        
        <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-xl">
          <img
            src={AboutImage}
            alt="About Oceanaura"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center px-2">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Oceanaura Visuals was born from a passion to capture real emotions and
            timeless moments. We believe every story is unique, and we are here to
            preserve it with creativity and cinematic storytelling.
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
            We Master In Documenting ...
          </h2>
          <Card />
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

      
        <div className="text-center px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
            <button className="bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition shadow-md hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;