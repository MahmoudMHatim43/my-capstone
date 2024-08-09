import "./welcome.css";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  const restaurantImage = `${process.env.PUBLIC_URL}/images/restaurant.jpg`;
  return (
    <section className="welcoming-image">
      <div className="welcome-nav-logo">
        <img src={logo} alt="little lemon logo" />
        <h2 className="text-xl">Little Lemon</h2>
      </div>
      <span>
        <NavLink className="welcome-order-btn" to="/order">
          Order
        </NavLink>
      </span>
      <img src={restaurantImage} alt="welcome" />
      <h1>Welcome to the Little Lemon</h1>
      <FaChevronDown className="welcome-chevron-one" />
      <FaChevronDown className="welcome-chevron-two" />
    </section>
  );
};

export { Welcome };
