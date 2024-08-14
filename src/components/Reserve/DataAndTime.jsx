import React, { useEffect, useState } from "react";
const DateAndTime = ({ data, errors, touched, handleChange, handleBlur }) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  console.log(availableTimes);
  useEffect(() => {
    const date = new Date(data.date);
    const time = fetchAPI(date);
    setAvailableTimes(time);
  }, [data.date]);
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
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((time) => {
              return (
                <option value={time} key={time}>
                  {time}
                </option>
              );
            })
          ) : (
            <option>No time avialable</option>
          )}
        </select>
        {touched.time && errors.time && (
          <p className="text-red-500 text-xs mt-1">{errors.time}</p>
        )}
      </div>
    </>
  );
  function seededRandom(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  }

  function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  }
};

export { DateAndTime };
