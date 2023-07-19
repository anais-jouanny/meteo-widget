import { useContext } from "react";
import { AppContext } from "../context/context";
import deleteCityStyles from "../modules/DeleteCity.module.css";
import DeleteCityInput from "../components/DeleteCity/DeleteCityInput";

const DeleteCity = () => {
  const { cities, setCities } = useContext(AppContext);

  const handleOnClick = (cityToDelete: string) => {
    console.log(cityToDelete);
    const updatedCities = cities.filter((city) => city !== cityToDelete);
    setCities(updatedCities);
  };

  return (
    <div>
      <h2 className={deleteCityStyles.title}>Voici la liste de vos villes :</h2>

      <ul className={deleteCityStyles.list}>
        {cities.map((city) => {
          return (
            <li className={deleteCityStyles.listItem} key={city}>
              {city}
              <DeleteCityInput city={city} onClick={handleOnClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeleteCity;
