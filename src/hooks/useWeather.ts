import { useGetWeatherQuery } from "../features/weather/weatherApi";
import weatherIcons from "../icons/weatherIcons";
import { useAppSelector } from "./hooks";

export function useWeather() {
  const city = useAppSelector((state) => state.cities.selectedCity);
  const shouldSkip = !city;
  const units = useAppSelector((s) => s.weather);
  const { data, isFetching, isLoading, isError, error } = useGetWeatherQuery(
    city
      ? {
          lat: city.latitude,
          lng: city.longitude,
          temperatureUnit: units.temperatureUnit,
          windSpeedUnit: units.windSpeedUnit,
          precipitationUnit: units.precipitationUnit,
          timezone: city.timezone ?? "auto",
        }
      : {
          lat: 0,
          lng: 0,
          temperatureUnit: units.temperatureUnit,
          windSpeedUnit: units.windSpeedUnit,
          precipitationUnit: units.precipitationUnit,
          timezone: "auto",
        },
    { skip: shouldSkip },
  );

  const weatherCode = data?.current.weather_code;
  const iconName =
    weatherCode !== undefined
      ? weatherIcons[weatherCode] || "icon-sunny.webp"
      : null;

  return {
    city,
    data,
    isFetching,
    isLoading,
    isError,
    error,
    iconPath: iconName ? `./images/${iconName}` : null,
  };
}
