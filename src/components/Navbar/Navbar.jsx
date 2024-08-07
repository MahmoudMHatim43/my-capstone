import { NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
const Navbar = () => {
  const [active, setActive] = React.useState("Home");
  const { theme, changeTheme, colorOne, colorTwo } =
    React.useContext(GlobalContext);
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  const pages = ["Home", "About", "Menu", "Reserve", "Order", "LOGIN"];
  return (
    <header>
      <nav
        className="navbar-container"
        style={{ backgroundColor: colorOne, color: colorTwo }}
      >
        <div className="navbar-company-logo">
          <img src={logo} alt="little lemon logo" />
          <h2 className="hidden md:block lg:text-4xl md:text-3xl">
            Little Lemon
          </h2>
        </div>
        <ul className="w-full md:w-[70%]">
          {pages.map((page) => {
            return (
              <NavLink
                to={`/${page === "Home" ? "" : page.toLowerCase()}`}
                className="cursor-pointer text-lg"
                onClick={() => setActive(page)}
                style={{ color: active === page ? "orange" : "" }}
              >
                {page === "Order" ? "Order Online" : page}
              </NavLink>
            );
          })}
        </ul>
        <div class="theme-button-container">
          <input type="checkbox" id="theme" onClick={changeTheme} />
          <label for="theme">
            <div class="theme-toggle-ball"></div>
          </label>
          <span className="text-sm font-semibold lg:text-lg text-white">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
