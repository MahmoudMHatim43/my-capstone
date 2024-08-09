import React from "react";

const UserComment = ({ user }) => {
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
      <span className="flex justify-end p-2 flex-1">{user.rating}/5</span>
    </div>
  );
};

export { UserComment };
