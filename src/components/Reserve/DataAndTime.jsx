import React from "react";

const DateAndTime = ({ data, errors, touched, handleChange, handleBlur }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="date"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Set Date
        </label>
        <input
          type="date"
          id="date"
          className="border border-gray-400 rounded-md px-2 py-1"
          name="date"
          value={data.date}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            border: `1px solid ${
              touched.date && errors.date
                ? "red"
                : touched.date
                ? "green"
                : null
            }`,
          }}
        />
        {touched.date && errors.date && (
          <p className="text-red-500 text-xs mt-1">{errors.date}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="time"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Set Time
        </label>
        <select
          id="time"
          className="border border-gray-400 rounded-md px-2 py-1"
          name="time"
          value={data.time}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            border: `1px solid ${
              touched.time && errors.time
                ? "red"
                : touched.time
                ? "green"
                : null
            }`,
          }}
        >
          <option value="">Select a time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="08:00 PM">08:00 PM</option>
          <option value="09:00 PM">09:00 PM</option>
        </select>
        {touched.time && errors.time && (
          <p className="text-red-500 text-xs mt-1">{errors.time}</p>
        )}
      </div>
    </>
  );
};

export { DateAndTime };
