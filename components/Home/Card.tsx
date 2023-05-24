import homeStyles from "../../modules/Home.module.css";
import Image from "next/image";
import { CurrentResponse } from "openweathermap-ts/dist/types";

const Card = ({ cityWeather }: CurrentResponse) => {
  const { name, main, weather } = cityWeather;
  return (
    <div className={homeStyles.card}>
      <h2 className={homeStyles.city}>{name}</h2>
      <p className={homeStyles.p}>
        température : <span>{main.temp_min}</span>
      </p>
      <p className={homeStyles.p}>{weather[0].description}</p>
      <Image
        alt="icon"
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        loading="lazy"
        className={homeStyles.icon}
        width={1}
        height={1}
      />
    </div>
  );
};

export default Card;
