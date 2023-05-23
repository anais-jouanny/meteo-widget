import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Home/Card";
import homeStyles from "../modules/Home.module.css";
import { AppContext } from "../context/context.js";
import { CurrentResponse } from "openweathermap-ts/dist/types";

const Home = () => {
  // Context : cities coord
  const { state, setState } = useContext(AppContext);
  const { cities, citiesCoord } = state;

  // Local state : wather of the day, for each city
  const [citiesWeather, setCitiesWeather] = useState<CurrentResponse[]>([]);

  // Get the coordinates for each city
  useEffect(() => {
    for (const city of cities) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6eaf17dc01ff87f43eb33d4793e89cea`
        )
        .then((response) => {
          setState({
            ...state,
            citiesCoord: response.data,
          });
        });
    }
  }, []);

  // Get the weather for each city
  useEffect(() => {
    for (const city of citiesCoord) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=6eaf17dc01ff87f43eb33d4793e89cea&units=metric&lang=fr`
        )
        .then((response) => {
          const newCity = { ...response.data, name: city.name };
          setCitiesWeather([...citiesWeather, newCity]);
        });
    }
  }, [citiesCoord]);

  console.log(citiesCoord);
  console.log(citiesWeather);

  return (
    <div className={homeStyles.container}>
      {citiesWeather.length > 0 &&
        citiesWeather.map((city: CurrentResponse) => {
          return <Card key={city.id} cityWeather={city} />;
        })}
    </div>
  );
};

export default Home;
