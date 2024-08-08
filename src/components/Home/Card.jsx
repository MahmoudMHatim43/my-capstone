import React from "react";

const Card = ({ item }) => {
  return (
    <div className="special-card-container">
      <img src={item.image} alt="dish" />
      <div className="special-card-info">
        <div className="special-card-header">
          <h1>{item.title}</h1>
          <span className="tracking-wide">${item.price}</span>
        </div>
        <p className="special-card-description">{item.description}</p>
      </div>
      <span className="special-card-rating">{item.rating}</span>
    </div>
  );
};

export { Card };
