import React, { useContext } from "react";
import { UserComment } from "./UserComment";
import { GlobalContext } from "../../context/GlobalContext";

const Testimonials = () => {
  const { users } = useContext(GlobalContext);
  return (
    <section className="observe-hide w-full md:w-[90%] m-[0_auto_2.5svh] p-4 testimonials-section">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-josefin font-bold">
        Customers Feedback
        <p className="p-3 text-xl md:text-2xl lg:text-3xl font-thin text-center">
          Come and share your experience with us 😃
        </p>
      </h1>
      <div className="test-cards-section grid grid-flow-col grid-rows-2 gap-3 h-[50svh] p-3 overflow-x-scroll overflow-y-hidden">
        {users.map((user, index) => {
          return <UserComment user={user} key={index} />;
        })}
      </div>
    </section>
  );
};

export { Testimonials };
