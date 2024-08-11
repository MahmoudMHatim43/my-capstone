import React from "react";

const Card = ({ item }) => {
  return (
    <div className="scc flex flex-col min-h-300px relative overflow-hidden cursor-pointer bg-[#4499555c] shadow-[0_0_10px] shadow-[#4499555c] rounded-small">
      <img
        src={item.image}
        alt="dish"
        className="object-cover w-full h-[40%]"
      />
      <div className="p-2">
        <div className="flex items-center text-center p-2 h-[30%] font-bold border-b border-t border-[#e1e1e1]">
          <h1 className="text-base w-full">{item.title}</h1>
        </div>
        <p className="p-[4px_0_0_0]">{item.description}</p>
      </div>
      <span className="p-[0.3em] absolute top-3 left-3 text-base text-white bg-[#00000062] backdrop-blur-sm rounded-small shadow-[0_0_5px] shadow-[#00000080]">
        ${item.price}
      </span>
    </div>
  );
};

export { Card };
