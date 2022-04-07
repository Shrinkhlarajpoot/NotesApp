import { createContext, useContext, useEffect, useState } from "react";
const Themecontext = createContext();
const useTheme = () => useContext(Themecontext);
const ThemeProvider = ({ children }) => {
const[darkTheme,setDarkTheme] =useState(false)

  return (
    <Themecontext.Provider
      value={{darkTheme,setDarkTheme }}
    >
      {children}
    </Themecontext.Provider>
  );
};
export { useTheme, ThemeProvider };