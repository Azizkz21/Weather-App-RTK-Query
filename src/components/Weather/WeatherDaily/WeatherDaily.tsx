import getWeatherIcon from "../../../function/getWeatherIcon";
import { useWeather } from "../../../hooks/useWeather";
import WeatherDailyList from "./WeatherDailyList";

export default function WeatherDaily() {
  const { data } = useWeather();

  if (!data) return null;

  const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });

  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="text-xl text-neutral100 sm:text-2xl">Daily forecast</h3>
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {data.daily.time.map((time, index) => {
          const formattedDay = dayFormatter.format(new Date(time));

          const dailyIcon = getWeatherIcon(data.daily.weather_code[index]);

          const maxTemp = Math.round(data.daily.temperature_2m_max[index]);
          const minTemp = Math.round(data.daily.temperature_2m_min[index]);

          return (
            <WeatherDailyList
              key={time}
              day={formattedDay}
              iconPath={dailyIcon}
              maxTemp={maxTemp}
              minTemp={minTemp}
            />
          );
        })}
      </ul>
    </div>
  );
}
