import React from "react";
import { NavLink } from "react-router-dom";
const FormSent = () => {
  return (
    <div className="mx-auto mb-32 mt-32 px-6 py-10 max-w-xl md:mt-20 font-josefin bg-[#f5f5f590] rounded-small">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">
          Thank you for your reservation
        </h1>
        <p className="text-center text-lg lg:text-2xl mb-8">
          We will contact you shortly and an email will be sent to you
        </p>
        <NavLink
          to="/"
          className="w-full md:w-auto text-lg lg:text-xl p-4 bg-prime text-white text-center rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Return to Homepage
        </NavLink>
      </div>
    </div>
  );
};

export { FormSent };
