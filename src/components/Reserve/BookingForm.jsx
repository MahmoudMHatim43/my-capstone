import React from "react";
import { Names } from "./Names";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { DateAndTime } from "./DataAndTime";
import { Occasion } from "./Occasion";
import { SpecialRequest } from "./SpecialRequest";
const BookingForm = () => {
  return (
    <form className="mx-auto mb-32 mt-32 px-6 py-10 max-w-xl md:mt-20 font-josefin bg-[#f5f5f590] rounded-small">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <Names />
        <Email />
        <Phone />
        <DateAndTime />
        <Occasion />
        <SpecialRequest />
      </div>
    </form>
  );
};

export { BookingForm };
