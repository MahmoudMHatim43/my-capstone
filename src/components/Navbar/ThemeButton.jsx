import React from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ThemeButton = () => {
  const { theme, changeTheme } = React.useContext(GlobalContext);
  return (
    <div className="theme-btn-container flex flex-col items-center gap-1 absolute top-10 right-4 font-josefin">
      <input
        className="invisible"
        type="checkbox"
        id="theme-btn"
        onChange={changeTheme}
      />
      <label
        htmlFor="theme-btn"
        className="relative cursor-pointer bg-white rounded-big w-[70px] h-[25px]"
      >
        <div className="theme-toggle-ball absolute top-[3px] left-[3px] rounded-full bg-black w-5 h-5"></div>
      </label>
      <span className="text-md lg:text-lg font-semibold">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
};

export { ThemeButton };
