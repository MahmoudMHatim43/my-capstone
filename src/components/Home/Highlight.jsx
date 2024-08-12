import React, { useContext } from "react";
import { Card } from "./Card";
import { GlobalContext } from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";

const Highlight = () => {
  const { dishes } = useContext(GlobalContext);
  return (
    <section className="observe-hide flex flex-col p-4 gap-3 h-[60svh] w-full md:w-[90%] m-[0_auto_2.5svh] font-josefin">
      <div className="flex justify-between items-center px-4 py-2 w-full border-b border-[#e1e1e1]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Specials</h1>
        <NavLink
          to={"/order"}
          className="hl-order-btn p-[0.6em_1.8em] text-lg font-milonga shadow-[0_0_3px] bg-prime"
        >
          Order Now
        </NavLink>
      </div>
      <div className="hl-dishes-container grid grid-flow-col gap-x-3 p-[0_0_10px_0] auto-cols-[45%] md:auto-cols-[29%] lg:auto-cols-[25%] xl:auto-cols-[15%] overflow-x-scroll overflow-y-hidden">
        {dishes.map((item) => {
          return <Card key={item.title} item={item} />;
        })}
      </div>
    </section>
  );
};

export { Highlight };
