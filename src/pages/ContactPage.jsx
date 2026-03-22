import React from "react";
import WorkHours from "../components/WorkHours";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 px-4 sm:px-6 py-8 sm:py-10 transition-all duration-500">

      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">

        
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            We’d love to hear from you!
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reach out to <b>Oceanaura Visuals</b>
          </p>
        </div>

        
        <div className="text-center space-y-3 sm:space-y-4 bg-white/70 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md backdrop-blur-md">

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 font-semibold max-w-3xl mx-auto">
            “Let’s sit together, plan your dream moments, and capture them beautifully with Oceanaura Visuals 😊”
          </p>

          <a
            href="https://wa.me/91873456123490"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 sm:mt-4 
            bg-white text-black 
            dark:bg-gray-700 dark:text-white 
            hover:bg-green-200 dark:hover:bg-green-600 
            px-4 sm:px-6 py-2 sm:py-3 
            text-sm sm:text-base 
            rounded-full transition shadow-md hover:scale-105"
          >
            💬 WhatsApp Us
          </a>

        </div>

       
        <div className="text-center space-y-3 sm:space-y-4 bg-white/70 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md backdrop-blur-md">

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Oceanaura Visuals
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Josco Jn, Thiruvalla <br />
            Pathanamthitta, Kerala, India
          </p>

        </div>

       
        <div className="text-center space-y-3 sm:space-y-4 bg-white/70 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md backdrop-blur-md">

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            📧 info@oceanauravisuals.com <br />
            📞 +91 873456123490
          </p>

        </div>

       
        <div className="text-center space-y-3 sm:space-y-4 bg-white/70 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md backdrop-blur-md">

          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Working Hours
          </h3>

          <WorkHours />

        </div>

   
        <div className="text-center space-y-3 sm:space-y-4 bg-white/70 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md backdrop-blur-md">

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Find Us on Map
          </h2>

          <div className="w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="OceanAura Location"
              src="https://www.google.com/maps?q=Josco%20Jn%2C%20Thiruvalla%2C%20Pathanamthitta%2C%20Kerala&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;