import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    cities: ["paris", "toulouse", "barcelone", "bangkok", "saint-denis"],
    citiesCoord: [],
  };
  const [state, setState] = useState(initialState);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
