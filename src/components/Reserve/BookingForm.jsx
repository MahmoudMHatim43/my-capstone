import React, { useEffect, useState } from "react";
import { Names } from "./Names";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { DateAndTime } from "./DataAndTime";
import { Occasion } from "./Occasion";
import { SpecialRequest } from "./SpecialRequest";
import { NavLink } from "react-router-dom";
const BookingForm = () => {
  const [done, setDone] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (Object.keys(formData).length >= 7) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);
  const formProps = {
    isDisabled: disabled,
    data: formData,
    errors,
    touched,
    handleChange,
    handleBlur,
  };
  return done ? (
    <div className="mx-auto mb-32 mt-32 px-6 py-10 max-w-xl md:mt-20 font-josefin bg-[#f5f5f590] rounded-small">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">
          Thank you for your reservation
        </h1>
        <p className="text-center text-base lg:text-2xl">
          We will contact you shortly and an email will be sent to you
        </p>
        <button className="w-full text-base lg:text-2xl p-[0.5em_1em] bg-prime text-white">
          <NavLink to="/">Return to Homepage</NavLink>
        </button>
      </div>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-32 mt-32 px-6 py-10 max-w-xl md:mt-20 font-josefin bg-[#f5f5f590] rounded-small"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <>
          <Names {...formProps} />
          <Email {...formProps} />
          <Phone {...formProps} />
          <DateAndTime {...formProps} />
          <Occasion {...formProps} />
          <SpecialRequest {...formProps} />
        </>
      </div>
    </form>
  );
  //functions:
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      alert("Form submitted successfully!");
      setFormData({});
      setErrors({});
      setTouched({});
      setDisabled(true);
      setDone(true);
    } else {
      alert("Please fill out all required fields.");
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  }
  function validateField(field, value) {
    let validationErrors = { ...errors };
    const phoneRegex =
      /^\+?[1-9]\d{1,14}$|^(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

    switch (field) {
      case "firstName":
        !value
          ? (validationErrors.firstName = "First name is required")
          : delete validationErrors.firstName;
        break;
      case "lastName":
        !value
          ? (validationErrors.lastName = "Last name is required")
          : delete validationErrors.lastName;
        break;
      case "email":
        !value
          ? (validationErrors.email = "Email is required")
          : !/\S+@\S+\.\S+/.test(formData.email)
          ? (validationErrors.email = "Email address is invalid")
          : delete validationErrors.email;
        break;
      case "phoneNumber":
        !value
          ? (validationErrors.phoneNumber = "Phone number is required")
          : phoneRegex.test(formData.email)
          ? (validationErrors.phoneNumber = "Email address is invalid")
          : delete validationErrors.phoneNumber;
        break;
      case "date":
        !value
          ? (validationErrors.date = "Date is required")
          : delete validationErrors.date;
        break;
      case "time":
        !value
          ? (validationErrors.time = "Time is required")
          : delete validationErrors.time;
        break;
      case "occasion":
        !value
          ? (validationErrors.occasion = "Occasion is required")
          : delete validationErrors.occasion;
        break;
      default:
        break;
    }
    setErrors(validationErrors);
  }
  function validate() {
    const validationErrors = {};
    const checkPoints = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phoneNumber,
      formData.date,
      formData.time,
      formData.occasion,
    ];
    checkPoints.forEach((point) => {
      if (!point) validationErrors[point] = "Required";
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }
};

export { BookingForm };
