import React from "react";

const PersonalInformation = () => {
  const inputSectionStyle =
    "flex justify-around md:justify-between items-center py-2 w-full lg:w-[40%] border-b border-[#e1e1e1]";
  const inputBoxStyle =
    "w-1/2 md:w-[250px] p-2 text-black rounded-small shadow-[0_0_10px] shadow-[#00000080]";
  const labeTextStyle = "text-xl md:text-2xl font-bold";

  return (
    <div className="flex flex-col gap-3">
      <div className="reserve-first-last-name flex flex-col gap-3 w-full justify-around items-center">
        <div className={`reserve-email ${inputSectionStyle}`}>
          <label htmlFor="reserve-firstName" className={labeTextStyle}>
            First Name
          </label>
          <input
            type="text"
            id="reserve-firstName"
            placeholder="write your first name"
            className={`${inputBoxStyle}`}
          />
        </div>
        <div className={`reserve-lastName ${inputSectionStyle}`}>
          <label htmlFor="reserve-lastName" className={labeTextStyle}>
            Last Name
          </label>
          <input
            type="text"
            id="reserve-lastName"
            placeholder="write your last name"
            className={`${inputBoxStyle}`}
          />
        </div>
        <div className={`reserve-email ${inputSectionStyle}`}>
          <label htmlFor="reserve-email" className={labeTextStyle}>
            E-mail
          </label>
          <input
            type="email"
            id="reserve-email"
            placeholder="example@gmail.com"
            className={`${inputBoxStyle}`}
          />
        </div>
      </div>
    </div>
  );
};

export { PersonalInformation };
