import { CountryCode, ThreeHourResponse } from "openweathermap-ts/dist/types";

export interface City {
  country: CountryCode;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export interface CityWeatherName extends ThreeHourResponse {
  name: string;
  country: string;
}
