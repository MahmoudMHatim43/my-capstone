import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  const restaurantImage = `${process.env.PUBLIC_URL}/images/restaurant.jpg`;
  return (
    <section className="welcoming-image h-[100svh] w-full absolute top-0 z-[-100]">
      <div className="flex flex-col justify-center items-center absolute top-2.5 right-1/2 translate-x-1/2 md:hidden">
        <img src={logo} alt="little lemon logo" className="w-1/3" />
        <h2 className="text-white text-xl text-center font-josefin">
          Little Lemon
        </h2>
      </div>
      <span>
        <NavLink
          className="block p-[0.5em_1.2em] mr-[0.5em] absolute top-3 right-12 translate-x-1/2 text-black text-base text-center font-josefin bg-orange-400 rounded-small shadow-[0_0_10px_#00000080] md:hidden"
          to="/order"
        >
          Order
        </NavLink>
      </span>
      <img
        className="object-cover w-full h-full"
        src={restaurantImage}
        alt="welcome"
      />
      <h1 className="w-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl md:text-5xl font-josefin font-bold">
        Welcome to the Little Lemon
      </h1>
      <FaChevronDown className="welcome-chevron text-white text-5xl absolute right-1/2 translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export { Welcome };
