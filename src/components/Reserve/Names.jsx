import React from "react";

const Names = () => {
  return (
    <>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          First name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            placeholder="write your first name"
            id="first-name"
            name="first-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            placeholder="write your last name"
            id="last-name"
            name="last-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
    </>
  );
};

export { Names };
