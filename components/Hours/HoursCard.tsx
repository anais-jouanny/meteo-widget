import hoursStyles from "../../modules/Hours.module.css";
import { useState } from "react";
import HoursTimestamp from "./HoursTimestamp";
import { CityWeatherName } from "../../utils/types";
import React from "react";

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

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className={cssClass}>
      <div
        className={hoursStyles.cardTitle}
        tabIndex={0}
        role="button"
        aria-pressed="false"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <p className={hoursStyles.city}>
          {name}
          <span className={hoursStyles.cityCountry} aria-hidden="true">
            - {country}
          </span>
        </p>
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
