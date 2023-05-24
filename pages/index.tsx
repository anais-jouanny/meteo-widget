import axios from "axios";
import { SetStateAction, useContext, useEffect, useState } from "react";
import Card from "../components/Home/Card";
import homeStyles from "../modules/Home.module.css";
import { AppContext } from "../context/context.js";
import { CurrentResponse } from "openweathermap-ts/dist/types";

const Home = () => {
  // API Key
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  // Context : cities coord
  const { state, setState } = useContext(AppContext);
  const { cities, citiesCoord } = state;

  // Local state : wather of the day, for each city
  const [citiesWeather, setCitiesWeather] = useState<CurrentResponse[]>([]);

  // Get the coordinates for each city
  useEffect(() => {
    let array: any[] = [];

    for (const city of cities) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
        )
        .then((response) => {
          array.push(response.data[0]);

          setState({
            ...state,
            citiesCoord: array,
          });
        });
    }
  }, []);

  console.log(citiesWeather);

  // Get the weather for each city
  useEffect(() => {
    let arrayBis: any[] = [];

    for (const city of citiesCoord) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric&lang=fr`
        )
        .then((response) => {
          const newCity = { ...response.data, name: city.name };
          arrayBis.push(newCity);
          setCitiesWeather(arrayBis);
        });
    }
  }, [citiesCoord]);

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
