import { Dispatch, SetStateAction } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityToSearch(newCityValue.replaceAll(" ", "-"));
    setNewCityValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
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
