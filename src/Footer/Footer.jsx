import "./footer.css";
import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  return (
    <footer className="footer bg-white relative bottom-0 w-full border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <div className="flex space-x-6 md:space-x-10">
              <ul className="md:flex items-start flex-col space-y-4 text-sm">
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/reserve">Reserve</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/order">Order</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 md:space-x-10">
              <ul className="md:flex items-start flex-col space-y-4 text-sm">
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  Join Us
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to="/login">Register</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 md:space-x-10">
              <ul className="md:flex items-start flex-col space-y-4 text-sm">
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  Contact us
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  +123456789
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  littlelemon@gmail.com
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 md:space-x-10">
              <ul className="md:flex items-start flex-col space-y-4 text-sm">
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  Social Media
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to={"https://facebook.com"}>Facebook</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to={"https://Instagram.com"}>Instagram</NavLink>
                </li>
                <li className="text-gray-500 font-semibold mb-2 md:mb-0">
                  <NavLink to={"https://x.com"}>Twitter</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <img src={logo} alt="logo" className="h-20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
