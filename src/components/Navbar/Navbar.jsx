import "./navbar.css";
import React from "react";
import { ThemeButton } from "./ThemeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  /*------------------ hooks ------------------*/
  const [active, setActive] = React.useState("Home");
  const { pages, mainColor, secondaryColor } = React.useContext(GlobalContext);
  /*-------------------------------------------*/
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  return (
    <header>
      <nav className="nav-container flex items-center justify-between p-2 h-12 relative z-50 shadow-[0_5px_5px_#00000080] md:flex">
        <div>
          <GiHamburgerMenu
            className="nav-burger-menu-btn text-orange-400"
            onClick={showMenu}
          />
        </div>
        <div className="flex items-center gap-3 h-full font-josefin font-bold">
          <img
            src={logo}
            alt="little lemon logo"
            className="object-cover h-full"
          />
          <h2 className="hidden md:text-3xl md:block lg:text-4xl">
            Little Lemon
          </h2>
        </div>
        <ul className="flex items-center justify-around w-[65%] lg:w-3/4 font-josefin">
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
        <ThemeButton />
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
