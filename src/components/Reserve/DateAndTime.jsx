import React from "react";

const DateAndTime = () => {
  const inputSectionStyle = "flex-1 flex flex-col justify-between text-center";
  const inputBoxStyle =
    "p-2 h-1/2 w-[75%] mx-auto text-center text-black rounded-small shadow-[0_0_10px] shadow-[#00000080]";
  const labeTextStyle = "text-xl font-bold md:text-2xl";

  return (
    <div className="reserve-date-and-time flex justify-between gap-3 w-full">
      <div className={`reserve-date ${inputSectionStyle}`}>
        <label htmlFor="res-date" className={labeTextStyle}>
          Choose date
        </label>
        <input type="date" id="res-date" className={inputBoxStyle} />
      </div>
      <div className={`reserve-time ${inputSectionStyle}`}>
        <label htmlFor="res-time" className={labeTextStyle}>
          Choose time
        </label>
        <select id="res-time" className={inputBoxStyle}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </div>
    </div>
  );
};

export { DateAndTime };
