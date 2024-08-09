import { GlobalContext } from "../../context/GlobalContext";
import "./testimonials.css";
import React from "react";
import { UserComment } from "./UserComment";

const Testimonials = () => {
  const { users } = React.useContext(GlobalContext);
  return (
    <section className="w-[90%] mx-auto">
      <h1 className="text-2xl font-bold">Customers Feedback</h1>
      <div className="testimonials-section-container">
        {users.map((user, index) => {
          return <UserComment user={user} key={index} />;
        })}
      </div>
    </section>
  );
};

export { Testimonials };
