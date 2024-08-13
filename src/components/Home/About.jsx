import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    isTheReduceMotionIsOn();
  }, []);
  const foundersOne = `${process.env.PUBLIC_URL}/images/Mario-and-Adrian-1.webp`;
  const foundersTwo = `${process.env.PUBLIC_URL}/images/Mario-and-Adrian-2.webp`;
  return (
    <section className="observe-hide flex flex-col lg:flex-row p-4 w-full md:w-[90%] m-[0_auto_2.5svh] font-josefin">
      <div className="flex flex-col gap-3 p-3 lg:flex-1">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Little Lemon
          </h1>
          <h2 className="pb-1 text-xl md:text-2xl font-bold">Sudan</h2>
          <hr className="w-[50%] lg:w-full" />
        </div>
        <p className="text-base md:text-lg">
          In January 2022, best friends Adrian and Mario decided to turn their
          shared dream of opening a restaurant into reality. One February
          afternoon, while enjoying a lemon tart, inspiration struck, and they
          decided to name their future eatery "Little Lemon."
          <span className="Adrian-Mario-images grid grid-flow-col auto-cols-[100%] overflow-x-scroll gap-3 m-4 md:hidden">
            <span className="Adrian-Mario-images-scroller relative w-full flex gap-3">
              <img
                src={foundersOne}
                alt="Andrian"
                className="about-image-one"
              />
              <img src={foundersTwo} alt="Mario" className="about-image-two" />
              <img
                src={foundersTwo}
                alt="random"
                className="about-image-three"
              />
            </span>
          </span>
          By March 2022, they had pooled their savings and transformed a small
          space into a cozy, inviting restaurant. They painted the walls a
          cheerful yellow and decorated with fresh lemons, creating a warm and
          welcoming atmosphere. In April 2022, Little Lemon opened its doors,
          offering home-style dishes like grilled lemon herb chicken and their
          beloved lemon tart. The community quickly embraced the restaurant, and
          by December 2022, Little Lemon had become a local favorite, generating
          an impressive income of $100,000 in its first year. Adrian and Mario's
          dream had come true, and their friendship grew even stronger as they
          shared their passion for good food and hospitality with their
          customers.
        </p>
        <button className="about-book-btn block m-[5%_auto] p-[0.6em_1.8em] text-lg font-milonga shadow-[0_0_3px] bg-prime md:hidden lg:block">
          Read More
        </button>
      </div>
      <div
        className="Adrian-Mario-images hidden grid-flow-col auto-cols-[100%] overflow-x-scroll gap-3 md:grid lg:flex-1 lg:items-center"
        data-animated="true"
      >
        <div className="Adrian-Mario-images-scroller relative w-full flex gap-3">
          <img src={foundersOne} alt="Andrian" className="about-image-one" />
          <img src={foundersTwo} alt="Mario" className="about-image-two" />
          <img src={foundersTwo} alt="random" className="about-image-three" />
        </div>
      </div>
      <button className="about-book-btn hidden m-[5%_auto] p-[0.6em_1.8em] text-lg font-milonga shadow-[0_0_3px] bg-prime md:block lg:hidden">
        Read More
      </button>
    </section>
  );
  function isTheReduceMotionIsOn() {
    const scroller = document.querySelector(".Adrian-Mario-images");
    scroller.setAttribute(
      "data-animated",
      !window.matchMedia("(prefers-reduced-motion:reduce)").matches
        ? true
        : false
    );
  }
};

export { About };
