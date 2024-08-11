import React from "react";
import { FaStar } from "react-icons/fa";

const UserComment = ({ user }) => {
  console.log([...Array(user.rating)]);

  return (
    <div className="testimonials-user-container flex flex-col justify-between w-[250px] overflow-hidden text-black bg-[#e1e1e183] shadow-[0_0_5px] shadow-[#00000080] rounded-small">
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
      <span className="flex justify-end p-2">
        {[...Array(5)].map((_, index) =>
          index < user.rating ? (
            <FaStar className="text-yellow-300" />
          ) : (
            <FaStar className="text-black" />
          )
        )}
      </span>
    </div>
  );
};

export { UserComment };
