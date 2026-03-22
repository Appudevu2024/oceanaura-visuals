import { useState } from "react";

const WorkHours = () => {
  const [open, setOpen] = useState(false);

  const hours = [
    { day: "Monday", time: "09:00 am – 08:00 pm" },
    { day: "Tuesday", time: "09:00 am – 08:00 pm" },
    { day: "Wednesday", time: "09:00 am – 08:00 pm" },
    { day: "Thursday", time: "09:00 am – 08:00 pm" },
    { day: "Friday", time: "09:00 am – 08:00 pm" },
    { day: "Saturday", time: "09:00 am – 08:00 pm" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="flex flex-col items-center space-y-3">

      
      <button
        onClick={() => setOpen(!open)}
        className="text-sm sm:text-base font-medium 
        text-blue-600 dark:text-blue-400 
        hover:underline transition"
      >
        {open ? "Hide Schedule ▲" : "View Schedule ▼"}
      </button>

     
      {open && (
        <div
          className="mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md 
          bg-white dark:bg-gray-800 
          shadow-lg rounded-xl p-4 sm:p-5 
          transition-all duration-300"
        >
          {hours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center 
              text-xs sm:text-sm md:text-base 
              text-gray-700 dark:text-gray-300 
              py-2 border-b last:border-none 
              border-gray-200 dark:border-gray-700"
            >
              <span className="font-medium">{item.day}</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default WorkHours;