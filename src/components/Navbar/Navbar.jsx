import "./navbar.css";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <div>
          <GiHamburgerMenu
            className="nav-burger-menu-btn"
            onClick={showMenu}
            style={{ color: "orange" }}
          />
        </div>
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
                onClick={() => {
                  setActive(page);
                  showMenu();
                }}
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
          <span className="text-md lg:text-lg font-semibold">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </nav>
    </header>
  );
  function showMenu() {
    const nav = document.querySelector(".nav-container");
    nav.classList.toggle("active");
    nav.classList.contains("active")
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
};

export { Navbar };
