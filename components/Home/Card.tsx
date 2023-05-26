import homeStyles from "../../modules/Home.module.css";
import Image from "next/image";
import { CurrentResponse } from "openweathermap-ts/dist/types";

type CardProps = {
  cityWeather: CurrentResponse;
};

const Card = ({ cityWeather }: CardProps) => {
  const { name, country, main, weather } = cityWeather;

  return (
    <div className={homeStyles.card}>
      <div className={homeStyles.cardTitle}>
        <h2 className={homeStyles.city}>{name}</h2>
        <h3 className={homeStyles.cityCountry}>{country}</h3>
      </div>

      <p className={homeStyles.p}>
        température : <span>{parseInt(main.temp_min)}°</span>
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
