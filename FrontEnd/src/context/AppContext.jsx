/* eslint-disable react/prop-types */
import { createContext } from "react";
import { doctors } from "../assets/assets";

// Context-variable
export const AppContext = createContext();

// Context-provider-function
const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
