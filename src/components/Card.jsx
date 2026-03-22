import React from "react";


export const cardData = [
  {
    id: 1,
    title: "Hindu Weddings",
    description:
      "Our highly experienced Photographers & Cinematographers deliver the best possible version of your Wedding Memories 😊",
    src: "/images/hindu.jfif",
  },
  {
    id: 2,
    title: "Christian Weddings",
    description:
      "Church Weddings are executed with utmost care by our Professional filmmakers 😊",
    src: "/images/Christian.jpg",
  },
  {
    id: 3,
    title: "Muslim Weddings",
    description:
      "All the essence of a Muslim Wedding gets captured beautifully 😊",
    src: "/images/muslim.jpg",
  },
  {
    id: 4,
    title: "Wedding Engagements",
    description: "Make your Engagement Moments stand out 😊",
    src: "/images/engagement.jpg",
  },
  {
    id: 5,
    title: "Baptism",
    description: "Capture your little one's special day 😊",
    src: "/images/baptism.jpg",
  },
  {
    id: 6,
    title: "Portfolios",
    description: "Build your profile with stunning images 📸",
    src: "/images/portfolio.jpg",
  },
  {
    id: 7,
    title: "Lifestyle Shoot",
    description: "Cherish your moments with outdoor portraits 😊",
    src: "/images/lifestyle.jpg",
  },
  {
    id: 8,
    title: "Birthday Functions",
    description: "Capture your little one's birthday moments 😊",
    src: "/images/birthday.jpg",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white p-4 text-center">
            {item.title}
          </h3>

          <img
            src={item.src}
            alt={item.title}
            className="w-full aspect-[3/4] object-cover"
          />

          <div className="p-4 flex flex-col flex-grow justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {item.description}
            </p>

            <div className="flex justify-center mt-4">
              <a
                href="https://wa.me/91873456123490"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border hover:bg-green-600 text-black dark:bg-black dark:text-white px-6 py-2 rounded-full transition"
              >
                Reach Us
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;