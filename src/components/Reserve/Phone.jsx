import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Phone = () => {
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Phone number
        </label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          <input
            id="phone-number"
            name="phone-number"
            type="tel"
            placeholder="(123) 456-7890"
            autoComplete="tel"
            className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};

export { Phone };
