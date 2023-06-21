import axios from "axios";
import { ThreeHourResponse } from "openweathermap-ts/dist/types";
import { useContext, useState, useEffect } from "react";
import HoursCard from "../components/Hours/HoursCard";
import { AppContext } from "../context/context";
import hoursStyles from "../modules/Hours.module.css";

const ByHours = () => {
  // API Key
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  // Context : cities name
  const { cities } = useContext(AppContext);

  // Local state : wather of 24 next hours (by hour), for each city
  const [citiesWeather, setCitiesWeather] = useState<ThreeHourResponse[]>([]);

  // Get the weather for each city
  useEffect(() => {
    let array: any[] = [];

    for (const city of cities) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
        )
        .then((response) => {
          const cityName = response.data[0].name;
          const cityContry =
            response.data[0].state + " - " + response.data[0].country;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric&lang=fr&cnt=10`
            )
            .then((response) => {
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
    <div className={hoursStyles.container}>
      <ul>
        {citiesWeather.length > 0 &&
          citiesWeather.map((city) => {
            return <HoursCard key={city.name} cityWeather={city} />;
          })}
      </ul>
    </div>
  );
};

export default ByHours;
