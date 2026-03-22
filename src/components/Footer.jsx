import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-gradient-to-r from-blue-100 via-sky-100 to-blue-200 
      dark:from-gray-900 dark:via-gray-800 dark:to-black 
      text-gray-800 dark:text-white py-8 sm:py-10 px-4 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6">

       
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
          Oceanaura Visuals
        </h2>

       
        <div className="flex gap-5 sm:gap-6 text-xl sm:text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-125"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition transform hover:scale-125"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/91873456123490"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        </div>

       
        <div className="w-16 sm:w-24 border-t border-gray-400 dark:border-gray-500"></div>

       
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-2">
          © 2026 Oceanaura Visuals. All Rights Reserved.
        </p>

       
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 
          bg-gray-900 text-white 
          dark:bg-white dark:text-black 
          px-4 sm:px-5 py-2 
          text-xs sm:text-sm md:text-base
          rounded-full 
          hover:opacity-80 transition 
          shadow-md hover:scale-105"
        >
          <FaArrowUp />
          Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;