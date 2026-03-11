import { useWeather } from "../../../hooks/useWeather";

export default function WeatherBanner() {
  const { city, data, iconPath } = useWeather();

  const date = data?.current.time ? new Date(data.current.time) : null;

  if (!data) return null;

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const formattedDate =
    date && !isNaN(date.getTime()) ? formatter.format(date) : "Loading...";

  return (
    <div className="relative flex flex-col items-center justify-center gap-4 px-4 overflow-hidden h-72 rounded-3xl lg:flex-row lg:justify-between">
      <div className="relative z-10 flex flex-col items-center gap-2 lg:items-start">
        <p className="text-2xl text-center text-neutral100 lg:text-left">
          {city?.name},{city?.country}
        </p>
        <p className="text-base text-center text-neutral300 lg:text-left">
          {formattedDate}
        </p>
      </div>
      <div className="relative z-10 flex items-center justify-center gap-4 mx-auto lg:mx-0 lg:ml-auto lg:items-start">
        {iconPath && (
          <img src={iconPath} alt="Weather Icon" className="w-20 h-20" />
        )}
        <p className="text-6xl text-center text-neutral100 lg:text-left">
          {data?.current.temperature_2m}°
        </p>
      </div>

      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="./images/bg-today-large.svg"
        />
        <img
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="./images/bg-today-small.svg"
          loading="lazy"
          width={345}
          height={290}
          alt="banner"
        />
      </picture>
    </div>
  );
}
