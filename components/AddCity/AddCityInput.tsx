import { CountryCode } from "openweathermap-ts/dist/types";
import { Dispatch, SetStateAction } from "react";

interface AddCityInputProps {
  state: {
    cities: string[];
    citiesCoord: string[];
  };
  setState: Dispatch<SetStateAction<AddCityInputProps["state"]>>;
  city: {
    country: CountryCode;
    lat: number;
    lon: number;
    name: string;
    state: string;
  };
}

const AddCityInput = ({ state, setState, city }: AddCityInputProps) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      cities: [...state.cities, city.name.toLocaleLowerCase()],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Ajouter à la liste" />
    </form>
  );
};

export default AddCityInput;
