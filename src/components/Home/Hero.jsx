import React from "react";
import { NavLink } from "react-router-dom";
const Hero = () => {
  const atmosphere = `${process.env.PUBLIC_URL}/images/atmosphere.jpg`;
  return (
    <>
      <section className="observe-hide flex gap-4 w-full md:w-[90%] min-h-[50svh] m-[105svh_auto_2.5svh] p-4 font-josefin">
        {/* left */}
        <div className="flex-1 flex flex-col gap-2 justify-around lg:justify-start min-h-full">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Little Lemon
            </h1>
            <h2 className="pb-2 text-xl md:text-2xl font-bold">Sudan</h2>
            <hr />
          </div>
          <p className="text-base md:text-lg">
            Little Lemon Restaurant is a cozy and friendly place to eat. It has
            simple, nice decor and comfortable seating. The menu has tasty,
            home-style meals made with fresh ingredients. From breakfast to
            dinner, you can enjoy classic dishes in a relaxed and welcoming
            atmosphere. It's perfect for a quick bite or a leisurely meal with
            friends and family.
          </p>
        </div>
        {/* right */}
        <div className="flex-1 flex flex-col justify-around min-h-full">
          <img
            src={atmosphere}
            alt="atmosphere"
            className="object-cover h-[75%] shadow-[0px_0px_5px] rounded-2xl"
          />
          <NavLink
            to="/reserve"
            className="hero-book-btn m-[5%_auto] p-[0.6em_1.8em] text-lg font-milonga shadow-[0_0_3px] bg-prime"
          >
            Reserve Table
          </NavLink>
        </div>
      </section>
      <hr className="w-[90%] mx-auto" />
    </>
  );
};

export { Hero };
