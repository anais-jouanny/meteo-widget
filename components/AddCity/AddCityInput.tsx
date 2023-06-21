import { ChangeEvent } from "react";
import { City } from "../../utils/types";
import addCityStyles from "../../modules/AddCity.module.css";

interface AddCityInputProps {
  city: City;
  onClick: (newCity: string) => void;
}

const AddCityInput = ({ city, onClick }: AddCityInputProps) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick(city.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="submit"
        value="Ajouter à la liste"
        className={addCityStyles.addbutton}
      />
    </form>
  );
};

export default AddCityInput;
