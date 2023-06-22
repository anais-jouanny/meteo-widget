import hoursStyles from "../../modules/Hours.module.css";
import { useState } from "react";
import HoursTimestamp from "./HoursTimestamp";
import { CityWeatherName } from "../../utils/types";

interface HoursCardProps {
  cityWeather: CityWeatherName;
}

const HoursCard = ({ cityWeather }: HoursCardProps) => {
  const { name, country, list } = cityWeather;
  const [isOpen, setIsOpen] = useState(false);
  const cssClass = isOpen ? hoursStyles.openCard : hoursStyles.card;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(cityWeather);

  return (
    <li className={cssClass}>
      <div className={hoursStyles.cardTitle} onClick={handleClick}>
        <h2 className={hoursStyles.city}>
          {name}
          <span className={hoursStyles.cityCountry}>- {country}</span>
        </h2>
      </div>

      {isOpen && (
        <div className={hoursStyles.datasRow}>
          {list.length > 0 &&
            list.map((timestamp) => {
              return <HoursTimestamp key={timestamp.dt} datas={timestamp} />;
            })}
        </div>
      )}
    </li>
  );
};

export default HoursCard;
