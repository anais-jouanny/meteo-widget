import { CountryCode } from "openweathermap-ts/dist/types";

export interface City {
  country: CountryCode;
  lat: number;
  lon: number;
  name: string;
  state: string;
}
