import { CountryCode } from "openweathermap-ts/dist/types";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import AddCityInput from "./AddCityInput";

interface CitiesListProps {
  citiesList: {
    country: CountryCode;
    lat: number;
    lon: number;
    name: string;
    state: string;
  }[];
}

const CitiesList = ({ citiesList }: CitiesListProps) => {
  const { state, setState } = useContext(AppContext);
  const { cities } = state;

  return (
    <ul>
      {citiesList.length > 0 &&
        citiesList.map((city) => {
          const isInList = cities.includes(city.name.toLowerCase());

          return (
            <li key={city.lat}>
              <h2>{city.name}</h2>

              <h3>
                {city.state} - {city.country}
              </h3>

              {!isInList && (
                <AddCityInput state={state} setState={setState} city={city} />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default CitiesList;
