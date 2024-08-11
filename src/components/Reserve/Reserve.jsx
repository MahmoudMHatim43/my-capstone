import "./reserve.css";
import React from "react";
import { BookingForm } from "./BookingForm";
const Reserve = () => {
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  return (
    <section className="w-full min-h-[100svh]">
      <div className="flex flex-col justify-center items-center gap-2 absolute top-2.5 right-1/2 translate-x-1/2 md:hidden">
        <img src={logo} alt="little lemon logo" className="w-1/5" />
        <h2 className="text-xl text-center font-josefin">Little Lemon</h2>
      </div>
      <BookingForm />
    </section>
  );
};

export { Reserve };
