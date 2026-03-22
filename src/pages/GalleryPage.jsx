import React, { useState } from "react";

const GalleryPage = () => {
  const images = Object.values(
    import.meta.glob("/src/assets/*.jpg|*.jfif", { eager: true })
  ).map((img) => img.default);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-3 sm:px-4 md:px-6 py-8 sm:py-10">

  
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Our Gallery
        </h1>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
          A glimpse into our captured moments
        </p>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer group"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-40 sm:h-52 md:h-64 object-cover 
              transform group-hover:scale-110 transition duration-500"
            />

          
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm sm:text-base transition">
              View
            </div>
          </div>
        ))}

      </div>

     
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
        
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl sm:text-3xl font-bold hover:text-red-500 transition"
          >
            ×
          </button>

          
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[95%] max-h-[85%] sm:max-w-[90%] sm:max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

    </div>
  );
};

export default GalleryPage;