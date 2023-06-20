import { useState, useEffect } from "react";
import CitiesList from "../components/AddCity/CitiesList";
import SearchBar from "../components/AddCity/SearchBar";
import axios from "axios";

const AddCity = () => {
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  const [newCityValue, setNewCityValue] = useState("");
  const [cityToSearch, setCityToSearch] = useState("");
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    if (cityToSearch !== "") {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityToSearch}&limit=5&appid=${apiKey}`
        )
        .then((response) => {
          setCitiesList(response.data);
        });
    }
  }, [cityToSearch]);

  return (
    <div>
      <SearchBar
        newCityValue={newCityValue}
        setNewCityValue={setNewCityValue}
        setCityToSearch={setCityToSearch}
      />
      <CitiesList citiesList={citiesList} />
    </div>
  );
};

export default AddCity;
