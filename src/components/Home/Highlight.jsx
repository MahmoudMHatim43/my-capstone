import "./highlight.css";
import React from "react";
import { Card } from "./Card";
import { GlobalContext } from "../../context/GlobalContext";

const Highlight = () => {
  const { dishes } = React.useContext(GlobalContext);
  return (
    <section className="highlight-section-container mx-auto w-[100%] md:w-[90%]">
      <div className="highlight-header">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Special</h1>
        <button className="hightlight-order-btn">Order Now</button>
      </div>
      <div className="highlight-dishes-container">
        {dishes.map((item) => {
          return <Card key={item.title} item={item} />;
        })}
      </div>
    </section>
  );
};

export { Highlight };
