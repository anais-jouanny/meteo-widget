import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import AddCityInput from "./AddCityInput";
import addCityStyles from "../../modules/AddCity.module.css";
import { City } from "../../utils/types";

interface CitiesListProps {
  citiesList: City[];
}

const CitiesList = ({ citiesList }: CitiesListProps) => {
  const { cities, setCities } = useContext(AppContext);
  const [citiesState, setCitiesState] = useState(cities);

  useEffect(() => {
    setCities(citiesState);
  }, [citiesState]);

  const handleOnClick = (newCity: string) => {
    setCitiesState([...citiesState, newCity.toLocaleLowerCase()]);
  };

  return (
    <ul className={addCityStyles.list}>
      {citiesList.length > 0 &&
        citiesList.map((city) => {
          const isInList = citiesState.includes(city.name.toLowerCase());

          return (
            <li key={city.lat} className={addCityStyles.listItem}>
              <p className={addCityStyles.city}>{city.name}</p>

              <p>
                {city.state} - {city.country}
              </p>

              {!isInList && (
                <AddCityInput city={city} onClick={handleOnClick} />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default CitiesList;
