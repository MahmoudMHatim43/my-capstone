import "./about.css";
import React from "react";

const About = () => {
  const foundersOne = `${process.env.PUBLIC_URL}/images/Mario-and-Adrian-1.jpg`;
  const foundersTwo = `${process.env.PUBLIC_URL}/images/Mario-and-Adrian-2.jpg`;
  return (
    <section className="about-section-container w-[100%] md:w-[90%] mx-auto">
      <div className="about-section-left">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold">
          Little Lemon
        </h1>
        <h2 className="mb-2.5 text-lg md:text-xl lg:text-2xl text-center font-bold italic">
          Sudan
        </h2>
        <p className="text-sm md:text-lg lg:text-xl">
          In January 2022, best friends Adrian and Mario decided to turn their
          shared dream of opening a restaurant into reality. One February
          afternoon, while enjoying a lemon tart, inspiration struck, and they
          decided to name their future eatery "Little Lemon." By March 2022,
          they had pooled their savings and transformed a small space into a
          cozy, inviting restaurant. They painted the walls a cheerful yellow
          and decorated with fresh lemons, creating a warm and welcoming
          atmosphere. In April 2022, Little Lemon opened its doors, offering
          home-style dishes like grilled lemon herb chicken and their beloved
          lemon tart. The community quickly embraced the restaurant, and by
          December 2022, Little Lemon had become a local favorite, generating an
          impressive income of $100,000 in its first year. Adrian and Mario's
          dream had come true, and their friendship grew even stronger as they
          shared their passion for good food and hospitality with their
          customers.
        </p>
        <button className="about-book-btn">Read More</button>
      </div>
      <div className="about-section-right">
        <img src={foundersOne} alt="Andrian" className="about-image-one" />
        <img src={foundersTwo} alt="Mario" className="about-image-two" />
      </div>
    </section>
  );
};

export { About };
