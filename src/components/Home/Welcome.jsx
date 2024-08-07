import "./welcome.css";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Welcome = () => {
  const restaurantImage = `${process.env.PUBLIC_URL}/images/restaurant.jpg`;
  return (
    <section className="welcoming-image">
      <img src={restaurantImage} alt="welcome" />
      <h1>Welcome to the Little Lemon 🍋</h1>
      <FaChevronDown className="welcome-chevron-one" />
      <FaChevronDown className="welcome-chevron-two" />
    </section>
  );
};

export { Welcome };
