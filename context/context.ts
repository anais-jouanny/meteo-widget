import { createContext } from "react";

export interface ContextProps {
  cities: string[];
  setCities: (city: string[]) => void;
}

export const initialState: ContextProps = {
  cities: [
    "paris",
    // "toulouse", "barcelone", "bangkok", "saint-denis"
  ],
  setCities: (city) => {},
};

export const AppContext = createContext<ContextProps>(initialState);
