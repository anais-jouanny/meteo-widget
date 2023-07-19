import deleteCityStyles from "../../modules/DeleteCity.module.css";

interface DeleteCityInputProps {
  city: string;
  onClick: (cityToDelete: string) => void;
}

const DeleteCityInput = ({ city, onClick }: DeleteCityInputProps) => {
  return (
    <button
      className={deleteCityStyles.deleteButton}
      aria-label={`Supprimer ${city} de la liste`}
      onClick={() => onClick(city)}
    >
      Supprimer
    </button>
  );
};

export default DeleteCityInput;
