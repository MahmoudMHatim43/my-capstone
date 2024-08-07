import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
const Hero = () => {
  const { colorOne, colorTwo } = React.useContext(GlobalContext);
  return (
    <section>
      <div className="hero-section-container">
        <div className="hero-section-left">
          <h1>Little Lemon</h1>
          <h2>Sudan</h2>
          <p>
            Little Lemon Restaurant is a cozy and friendly place to eat. It has
            simple, nice decor and comfortable seating. The menu has tasty,
            home-style meals made with fresh ingredients. From breakfast to
            dinner, you can enjoy classic dishes in a relaxed and welcoming
            atmosphere. It's perfect for a quick bite or a leisurely meal with
            friends and family
          </p>
        </div>
        <div className="hero-section-right"></div>
      </div>
    </section>
  );
};

export { Hero };
