import "./hero.css";
import React from "react";
const Hero = () => {
  const atmosphere = `${process.env.PUBLIC_URL}/images/atmosphere.jpg`;
  return (
    <section className="hero-section-container w-[100%] md:w-[90%]">
      <div className="hero-section-left">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold">
          Little Lemon
        </h1>
        <h2 className="mb-2.5 text-lg md:text-xl lg:text-2xl text-center font-bold italic">
          Sudan
        </h2>
        <p className="text-sm md:text-lg lg:text-xl">
          Little Lemon Restaurant is a cozy and friendly place to eat. It has
          simple, nice decor and comfortable seating. The menu has tasty,
          home-style meals made with fresh ingredients. From breakfast to
          dinner, you can enjoy classic dishes in a relaxed and welcoming
          atmosphere. It's perfect for a quick bite or a leisurely meal with
          friends and family
        </p>
      </div>
      <div className="hero-section-right">
        <img src={atmosphere} alt="atmosphere" />
        <button className="hero-book-btn">Book Now</button>
      </div>
    </section>
  );
};

export { Hero };
