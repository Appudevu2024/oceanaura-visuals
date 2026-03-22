import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-4 sm:px-6 py-8 sm:py-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">

        
        <div>
          <img
            src="/images/lifestyle.jpg"
            alt="services"
            className="rounded-xl sm:rounded-2xl shadow-lg w-full h-60 sm:h-80 md:h-full object-cover"
          />
        </div>

       
        <div className="space-y-6 sm:space-y-8">

          {[
            {
              title: "Candid & Traditional Wedding Photography",
              desc: "We always love the candid way of documenting events, giving equal weight to the traditional style. You may custom pick your shooting style — Candid Mode, Traditional Mode, or even both 😊",
            },
            {
              title: "Candid & Traditional Wedding Movies",
              desc: "For the love of candid & cinematic wedding movies, you are at the right place. We capture your intimate wedding emotions at their best and deliver memories for a lifetime.",
            },
            {
              title: "Cinematic Wedding Highlights Movie",
              desc: "Beautifully crafted cinematic highlight movies that tell your story in a short, emotional, and artistic way.",
            },
            {
              title: "Premium Albums",
              desc: "Premium handcrafted albums, coffee table candid albums, and mini albums. All our deliverables are premium packed with RGB prints.",
            },
            {
              title: "LED Video Walls",
              desc: "Live stream your wedding visuals to a hosted LED Video Wall. We provide custom HD LED Video Walls starting from 60 sq. ft.",
            },
            {
              title: "Instant Photo Prints",
              desc: "Impress your guests with instant photo prints, delivered instantly at your event.",
            },
            {
              title: "Photo Booths",
              desc: "Host a fun photo booth with instant photo prints for your guests to enjoy and take home memories.",
            },
            {
              title: "360 Degree Cam Booth",
              desc: "Get a 360-degree selfie experience and share your moments instantly on Instagram.",
            },
            {
              title: "HD YouTube Live Streaming",
              desc: "Instantly live stream your intimate wedding moments with your loved ones abroad.",
            },
          ].map((service, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Services;