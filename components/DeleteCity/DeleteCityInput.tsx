import { ChangeEvent } from "react";
import deleteCityStyles from "../../modules/DeleteCity.module.css";

interface DeleteCityInputProps {
  city: string;
  onClick: (cityToDelete: string) => void;
}

const DeleteCityInput = ({ city, onClick }: DeleteCityInputProps) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        className={deleteCityStyles.deleteButton}
        aria-label={`Supprimer ${city} de la liste`}
      >
        Supprimer
      </button>
    </form>
  );
};

export default DeleteCityInput;
