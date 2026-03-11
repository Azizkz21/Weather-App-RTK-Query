import { useWeather } from "../../hooks/useWeather";
import Hourly from "./Hourly/Hourly";
import WeatherHero from "./WeatherHero/WeatherHero";

export default function WeatherMain() {
  const { city, data } = useWeather();
  if (!city || !data) {
    return (
      <p className="mt-4 w-full text-center text-2xl text-neutral100 lg:text-4xl">
        No search result found!
      </p>
    );
  }
  return (
    <section className="pb-10">
      <div className="mx-auto flex max-w-1440w flex-col items-start justify-between gap-6 px-4 py-3 lg:flex-row lg:pt-10">
        <WeatherHero />
        <Hourly />
      </div>
    </section>
  );
}
