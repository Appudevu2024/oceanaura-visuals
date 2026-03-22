import { useEffect, useState } from "react";
import Carousel1 from "/images/carousel1.jpg";
import Carousel2 from "/images/carousel2.jpg";
import Carousel3 from "/images/carousel3.jpg";
import Carousel4 from "/images/carousel4.jpg";
import Carousel5 from "/images/carousel5.jpg";
import logo from "/images/logo.png";

const slides = [
  {
    id: 1,
    image: Carousel1,
    title: "OceanAura Visuals - Capturing the Essence of Every Moment",
    description: "Premium Photography & Cinematic Films for Every Occasion",
  },
  {
    id: 2,
    image: Carousel2,
    title: "Full Of Life",
    description: "We ensure life moments are captured at its best.",
  },
  {
    id: 3,
    image: Carousel3,
    title: "Candid Wedding Filming",
    description: "Candid moments captured at its best",
  },
  {
    id: 4,
    image: Carousel4,
    title: "Dramatic Portraits",
    description: "For the love of dramatic shots",
  },
  {
    id: 5,
    image: Carousel5,
    title: "Cinematic Post Wedding",
    description: "Creative and stunning portraits",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] overflow-hidden">

     
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
        <img
          src={logo}
          alt="Oceanaura Logo"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-2 sm:border-4 border-white shadow-xl"
        />
      </div>

     
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

         
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">

            <h2 className="text-white text-sm sm:text-xl md:text-3xl lg:text-5xl font-semibold mb-2 drop-shadow-lg max-w-[90%] md:max-w-2xl leading-tight">
              {slide.title}
            </h2>

            <p className="text-white text-[10px] sm:text-sm md:text-lg lg:text-xl opacity-90 max-w-[85%] md:max-w-xl">
              {slide.description}
            </p>

            <a
              href="https://wa.me/91873456123490"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-6 bg-white hover:bg-green-400 dark:bg-gray-600 dark:text-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold transition shadow-lg hover:scale-105 duration-300"
            >
              Contact
            </a>

          </div>
        </div>
      ))}

      
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1.5 sm:p-2 md:p-3 rounded-full text-xs sm:text-sm md:text-lg z-20"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1.5 sm:p-2 md:p-3 rounded-full text-xs sm:text-sm md:text-lg z-20"
      >
        &gt;
      </button>

     
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-4 sm:w-6 h-1.5 sm:h-2"
                : "bg-white/50 w-1.5 sm:w-2 h-1.5 sm:h-2"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Carousel;