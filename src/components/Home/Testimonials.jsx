import { GlobalContext } from "../../context/GlobalContext";
import "./testimonials.css";
import React from "react";

const Testimonials = () => {
  const { users } = React.useContext(GlobalContext);
  return (
    <section className="w-[90%] mx-auto">
      <h1 className="text-2xl font-bold">Customers Feedback</h1>
      <div className="testimonials-section-container">
        {users.map((user) => {
          return (
            <div className="testimonials-user-container">
              {/* profile + name */}
              <div className="flex justify-between p-2 items-center">
                <img
                  className="w-[50px] rounded-full"
                  src={user.profileImage}
                  alt="profile"
                />
                <span>{user.username}</span>
              </div>
              {/* comment */}
              <p className="p-2">{user.comment}</p>
              {/* rate */}
              <span className="flex justify-end p-2">{user.rating}/5</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Testimonials };
