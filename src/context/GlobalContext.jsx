import React from "react";

const GlobalContext = React.createContext(undefined);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const colorOne = theme === "light" ? "white" : "black";
  const colorTwo = theme === "light" ? "black" : "white";
  return (
    <GlobalContext.Provider value={{ theme, changeTheme, colorOne, colorTwo }}>
      {children}
    </GlobalContext.Provider>
  );
  // functions
  function changeTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
};

export { GlobalContext, ContextProvider };
