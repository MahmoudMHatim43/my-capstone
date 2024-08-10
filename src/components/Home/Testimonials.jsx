import React from "react";
import { UserComment } from "./UserComment";
import { GlobalContext } from "../../context/GlobalContext";

const Testimonials = () => {
  const { users } = React.useContext(GlobalContext);
  return (
    <section className="observe-hide w-[90%] mx-auto testimonials-section">
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
