import {
  CountryCode,
  CurrentResponse,
  ThreeHourResponse,
} from "openweathermap-ts/dist/types";

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

export interface CityWeatherByHour extends CurrentResponse {
  name: string;
  country: string;
}
