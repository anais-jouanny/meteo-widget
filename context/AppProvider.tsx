import React, { FC, ReactNode, useState } from "react";
import { AppContext, ContextProps, initialState } from "./context";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [cities, setNewCities] = useState<string[]>(initialState.cities);
  const setCities = (newCity: string[]) => setNewCities(newCity);
  return (
    <AppContext.Provider value={{ cities, setCities }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
