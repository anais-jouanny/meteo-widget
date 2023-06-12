import { ThreeHourResponse } from "openweathermap-ts/dist/types";
import hoursStyles from "../../modules/Hours.module.css";
import { useState } from "react";
import HoursTimestamp from "./HoursTimestamp";

interface HoursCardProps {
  cityWeather: ThreeHourResponse;
}

const HoursCard = ({ cityWeather }: HoursCardProps) => {
  const { name, country, list } = cityWeather;
  const [isOpen, setIsOpen] = useState(false);
  const cssClass = isOpen ? hoursStyles.openCard : hoursStyles.card;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={cssClass}>
      <div className={hoursStyles.cardTitle} onClick={handleClick}>
        <h2 className={hoursStyles.city}>{name}</h2>
        <h3 className={hoursStyles.cityCountry}>- {country}</h3>
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
