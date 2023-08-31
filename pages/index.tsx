import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Home/Card";
import homeStyles from "../modules/Home.module.css";
import { CurrentResponse } from "openweathermap-ts/dist/types";
import { AppContext } from "../context/context";
import { CityWeatherByHour } from "../utils/types";

const Home = () => {
  // API Key
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  // Context : cities name
  const { cities } = useContext(AppContext);

  // Local state : wather of the day, for each city
  const [citiesWeather, setCitiesWeather] = useState<CityWeatherByHour[]>([]);
  console.log(citiesWeather);

  useEffect(() => {
    let array: any[] = [];

    for (const city of cities) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
        )
        .then((response) => {
          console.log(response.data);
          const cityName = response.data[0].name;
          const cityContry =
            response.data[0].state + " - " + response.data[0].country;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric&lang=fr`
            )
            .then((response) => {
              console.log(response.data);
              const newCity = {
                ...response.data,
                name: cityName,
                country: cityContry,
              };
              array.push(newCity);
            })
            .then(() => {
              setCitiesWeather([...citiesWeather, ...array]);
            });
        });
    }
  }, []);

  return (
    <div className={homeStyles.container}>
      {citiesWeather.length > 0 &&
        citiesWeather.map((city: CityWeatherByHour) => {
          return <Card key={city.id} cityWeather={city} />;
        })}
    </div>
  );
};

export default Home;
