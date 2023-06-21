import { ChangeEvent, Dispatch, SetStateAction } from "react";
import addCityStyles from "../../modules/AddCity.module.css";

interface SearchBarProps {
  newCityValue: string;
  setNewCityValue: Dispatch<SetStateAction<string>>;
  setCityToSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({
  newCityValue,
  setNewCityValue,
  setCityToSearch,
}: SearchBarProps) => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCityToSearch(newCityValue.replace(" ", "-"));
    setNewCityValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={addCityStyles.form}>
      <input
        className={addCityStyles.searchbar}
        type="text"
        placeholder="Chercher une ville"
        pattern="[a-zA-Z -]*"
        value={newCityValue}
        onChange={(e) => {
          setNewCityValue(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
