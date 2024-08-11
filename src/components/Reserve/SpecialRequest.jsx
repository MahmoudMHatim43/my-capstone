import React, { useState } from "react";

const SpecialRequest = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            placeholder="Tell us about any special requests that we should take into account."
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="mt-3.5 sm:mt-6">
          <button
            disabled={disabled}
            type="submit"
            id="submit"
            name="submit"
            className="block w-full rounded-md bg-prime px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            style={{ opacity: disabled ? 0.5 : 1 }}
          >
            Reserve A Table
          </button>
        </div>
      </div>
    </>
  );
};

export { SpecialRequest };
