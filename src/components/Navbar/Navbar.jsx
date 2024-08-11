import "./navbar.css";
import React from "react";
import { ThemeButton } from "./ThemeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const [active, setActive] = React.useState("Home");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { pages } = React.useContext(GlobalContext);
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  const logo = `${process.env.PUBLIC_URL}/images/logo-no-bg.png`;
  return (
    <header>
      <nav
        className={`nav-container ${
          menuOpen ? "active" : ""
        } flex items-center justify-between p-2 h-12 relative z-50 text-white shadow-[0_5px_5px_#00000080] md:flex`}
      >
        <div>
          <GiHamburgerMenu
            className="nav-burger-menu-btn text-orange-400"
            onClick={() => setMenuOpen(!menuOpen)}
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
                className={`cursor-pointer text-lg text-${
                  active === page ? "orange-400" : ""
                }`}
                onClick={() => {
                  setActive(page);
                  setMenuOpen(false);
                }}
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
};

export { Navbar };
