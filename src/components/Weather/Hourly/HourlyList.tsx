import getWeatherIcon from "../../../function/getWeatherIcon";
import { useWeather } from "../../../hooks/useWeather";

type Props = { currentDate: string };

export default function HourlyList({ currentDate }: Props) {
  const { data } = useWeather();
  if (!data) return null;

  const allHours = data.hourly.time.map((timeString, index) => {
    return {
      time: timeString,
      temp: data.hourly.temperature_2m[index],
      weatherCode: data.hourly.weather_code[index],
    };
  });

  const currentHourly = allHours
    .filter((item) => item.time.split("T")[0] === currentDate)
    .splice(0, 10);

  const hourFormatter = new Intl.DateTimeFormat("en-US", { hour: "numeric" });

  return (
    <ul className="flex flex-col w-full gap-2">
      {currentHourly.map((item) => {
        const formattedHour = hourFormatter.format(new Date(item.time));
        const hourIcon = getWeatherIcon(item.weatherCode);
        const temp = Math.round(item.temp);

        return (
          <li
            className="flex items-center justify-between gap-2"
            key={item.time}
          >
            <div className="flex items-center gap-3">
              <img
                src={hourIcon}
                alt="Weather Icon"
                className="object-contain h-14 w-14"
              />
              <p className="text-lg text-neutral400">{formattedHour}</p>
            </div>
            <p className="text-lg text-neutral400">{temp}</p>
          </li>
        );
      })}
    </ul>
  );
}
