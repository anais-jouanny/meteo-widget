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
      <button
        className={addCityStyles.addbutton}
        aria-label={`Ajouter ${city.name} à la liste`}
      >
        Ajouter à la liste
      </button>
    </form>
  );
};

export default AddCityInput;
