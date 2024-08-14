import React from "react";

const About = () => {
  const foundersOne = `${process.env.PUBLIC_URL}/images/Mario-and-Adrian-1.webp`;
  const foundersTwo = `${process.env.PUBLIC_URL}/images/Mario-and-Adrian-2.webp`;
  return (
    <div className="bg-prime h-screen flex flex-col justify-center items-center">
      <div className="bg-second p-4 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <div className="flex justify-center items-center">
          <img src={foundersOne} alt="founders" className="w-2/3" />
          <img src={foundersTwo} alt="founders" className="w-2/3" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-second text-center text-2xl font-bold mt-4">
            Little Lemon is a family-owned restaurant that has been in the local
            community for over 10 years.
          </h1>
          <p className="text-center text-base mt-4">
            Our story began in 2015 when Mario and Adrian, two brothers with a
            passion for cooking, decided to open their own restaurant. They
            brought their Mediterranean roots to the table and created a fusion
            of flavors, perfect for families, romantic evenings, and casual
            gatherings.
          </p>
        </div>
      </div>
    </div>
  );
};

export { About };
