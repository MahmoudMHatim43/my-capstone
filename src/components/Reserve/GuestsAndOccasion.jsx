import React from "react";
const GuestsAndOccasion = () => {
  return (
    <div className="reserve-guests-and-occassion flex justify-between gap-3 w-full">
      <div className="reserve-guests flex-1 flex flex-col justify-between text-center">
        <label htmlFor="guests" className="text-xl font-bold md:text-2xl">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className="p-2 h-1/2 w-[75%] mx-auto text-center text-black rounded-small shadow-[0_0_10px] shadow-[#00000080]"
        />
      </div>
      <div className="reserve-occasion flex-1 flex flex-col justify-between text-center">
        <label htmlFor="occasion" className="text-xl font-bold md:text-2xl">
          Occasion
        </label>
        <select
          id="occasion"
          className="p-2 h-1/2 w-[75%] mx-auto text-center text-black rounded-small shadow-[0_0_10px] shadow-[#00000080]"
        >
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
          <option>Graduation</option>
          <option>Reunion</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  );
};

export { GuestsAndOccasion };
