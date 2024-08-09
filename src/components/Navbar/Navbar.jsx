import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  /*------------------ hooks ------------------*/
  const [active, setActive] = React.useState("Home");
  const { theme, changeTheme, mainColor, secondaryColor, pages } =
    React.useContext(GlobalContext);
  /*-------------------------------------------*/
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  return (
    <header>
      <nav
        className="nav-container"
        style={{ backgroundColor: mainColor, color: secondaryColor }}
      >
        <div className="nav-logo">
          <img src={logo} alt="little lemon logo" />
          <h2 className="hidden md:text-3xl md:block lg:text-4xl">
            Little Lemon
          </h2>
        </div>
        <ul className="w-full md:w-[70%] lg:w-[60%]">
          {pages.map((page) => {
            return (
              <NavLink
                key={page}
                to={`/${page === "Home" ? "" : page.toLowerCase()}`}
                className="cursor-pointer text-lg"
                onClick={() => setActive(page)}
                style={{ color: active === page ? "orange" : "" }}
              >
                {page === "LOGIN" ? "| " : ""}
                {page === "Order" ? "Order Online" : page}
              </NavLink>
            );
          })}
        </ul>
        <div className="theme-btn-container">
          <input
            className="invisible"
            type="checkbox"
            id="theme-btn"
            onClick={changeTheme}
          />
          <label htmlFor="theme-btn">
            <div className="theme-toggle-ball"></div>
          </label>
          <span className="text-white text-sm lg:text-lg font-semibold">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
