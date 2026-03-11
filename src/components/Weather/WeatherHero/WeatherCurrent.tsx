import { useWeather } from "../../../hooks/useWeather";
import WeatherCurrentList from "./WeatherCurrentList";

export default function WeatherCurrent() {
  const { data } = useWeather();

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
      <WeatherCurrentList
        title="Feels like"
        value={data?.current.apparent_temperature}
        unit={data?.current_units.apparent_temperature}
      />
      <WeatherCurrentList
        title="Humidity"
        value={data?.current.relative_humidity_2m}
        unit={data?.current_units.relative_humidity_2m}
      />

      <WeatherCurrentList
        title="Wind"
        value={data?.current.wind_speed_10m}
        unit={data?.current_units.wind_speed_10m}
      />
      <WeatherCurrentList
        title="Precipitation"
        value={data?.current.precipitation}
        unit={data?.current_units.precipitation}
      />
    </ul>
  );
}
