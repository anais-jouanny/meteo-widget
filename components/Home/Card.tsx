import homeStyles from "../../modules/Home.module.css";
import Image from "next/image";
import { CityWeatherByHour } from "../../utils/types";

type CardProps = {
  cityWeather: CityWeatherByHour;
};

const Card = ({ cityWeather }: CardProps) => {
  const { name, country, main, weather } = cityWeather;

  return (
    <div className={homeStyles.card} tabIndex={0}>
      <div className={homeStyles.cardTitle}>
        <p className={homeStyles.city}>{name}</p>
        <p className={homeStyles.cityCountry} aria-hidden="true">
          {country}
        </p>
      </div>

      <p className={homeStyles.p}>
        température : <span>{Math.round(main.temp_min)}°</span>
      </p>
      <p className={homeStyles.p}>{weather[0].description}</p>
      <Image
        alt="icon"
        aria-hidden="true"
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
