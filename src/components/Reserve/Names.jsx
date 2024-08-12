import React from "react";

const Names = ({ data, errors, touched, handleChange, handleBlur }) => {
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
            name="firstName"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={data.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              border: `1px solid ${
                touched.firstName && errors.firstName
                  ? "red"
                  : touched.firstName
                  ? "green"
                  : null
              }`,
            }}
          />
          {touched.firstName && errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
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
            name="lastName"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={data.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              border: `1px solid ${
                touched.lastName && errors.lastName
                  ? "red"
                  : touched.lastName
                  ? "green"
                  : null
              }`,
            }}
          />
          {touched.lastName && errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
    </>
  );
};

export { Names };
