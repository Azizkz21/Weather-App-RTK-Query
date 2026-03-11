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
    <div className="relative flex h-72 flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl px-4 lg:flex-row lg:justify-between">
      <div className="relative z-10 flex flex-col items-center gap-2 lg:items-start">
        <p className="text-center text-2xl text-neutral100 lg:text-left">
          {city?.name},{city?.country}
        </p>
        <p className="text-center text-base text-neutral300 lg:text-left">
          {formattedDate}
        </p>
      </div>
      <div className="relative z-10 mx-auto flex items-center justify-center gap-4 lg:mx-0 lg:ml-auto lg:items-start">
        {iconPath && (
          <img src={iconPath} alt="Weather Icon" className="h-20 w-20" />
        )}
        <p className="text-center text-6xl text-neutral100 lg:text-left">
          {data?.current.temperature_2m}
        </p>
      </div>

      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="./images/bg-today-large.svg"
        />
        <img
          className="absolute left-0 top-0 h-full w-full object-cover"
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
