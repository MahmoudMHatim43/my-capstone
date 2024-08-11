import React from "react";
import { DateAndTime } from "./DateAndTime";
import { GuestsAndOccasion } from "./GuestsAndOccasion";
import { PersonalInformation } from "./PersonalInformation";
const BookingForm = () => {
  return (
    <div className="flex items-center w-[90%] m-auto pt-[15svh] font-josefin">
      <form className="flex flex-col justify-around gap-8 h-full w-full p-3 text-white bg-prime rounded-small shadow-[0_0_10px] shadow-[#00000080]">
        <PersonalInformation />
        <DateAndTime />
        <GuestsAndOccasion />
        <input
          type="submit"
          value="Make Your Reservation"
          className="w-80 mx-auto p-2 text-xl text-black font-milonga md:text-2xl bg-second rounded-small shadow-[0_0_10px] shadow-[#00000080]"
        />
      </form>
    </div>
  );
};

export { BookingForm };
