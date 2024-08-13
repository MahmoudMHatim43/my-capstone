import React, { useEffect, useState } from "react";

const Occasion = ({ data }) => {
  const [selectedOccasion, setSelectedOccasion] = useState("Optional");
  useEffect(() => {
    data.occasion = selectedOccasion !== "" ? selectedOccasion : data.occasion;
  }, [selectedOccasion, data]);
  const [isOpen, setIsOpen] = useState(false);
  const occasions = [
    "Birthday",
    "Engagement",
    "Anniversary",
    "Graduation",
    "Promotion",
    "Reunion",
    "Other",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <label className="block text-lg font-semibold mb-2" htmlFor="occasion">
        Select occasion
      </label>
      <div className="relative">
        <button
          id="occasion"
          className={`w-full text-left px-4 py-2 bg-${
            selectedOccasion === "" ? "gray-100" : "green-400"
          } border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown();
          }}
        >
          {selectedOccasion}
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
            <ul className="py-1">
              {occasions.map((occasion) => (
                <li key={occasion}>
                  <button
                    onClick={() => handleSelect(occasion)}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-200 ${
                      selectedOccasion === occasion
                        ? "bg-gray-200 font-semibold"
                        : ""
                    }`}
                  >
                    {occasion}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export { Occasion };
