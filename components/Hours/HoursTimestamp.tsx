import hoursStyles from "../../modules/Hours.module.css";
import { ThreeHourResponse } from "openweathermap-ts/dist/types";
import Image from "next/image";

interface TimestampProps {
  datas: ThreeHourResponse["list"][0];
}

const HoursTimestamp = ({ datas }: TimestampProps) => {
  // date
  const date = new Date(datas.dt * 1000);
  const hour = date.getHours();

  return (
    <div className={hoursStyles.hourColumn}>
      <p>{hour}h</p>
      <Image
        alt={datas.weather[0].description}
        src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
        loading="lazy"
        className={hoursStyles.icon}
        width={1}
        height={1}
      />
      <p>{Math.round(datas.main.temp)}°</p>
    </div>
  );
};

export default HoursTimestamp;
