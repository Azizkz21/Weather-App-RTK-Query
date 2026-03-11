import WeatherBanner from "./WeatherBanner";
import WeatherDaily from "../WeatherDaily/WeatherDaily";
import WeatherCurrent from "./WeatherCurrent";

export default function WeatherHero() {
  return (
    <div className="flex flex-col w-full gap-8 max-w-945w">
      <div className="flex flex-col w-full gap-6">
        <WeatherBanner />
        <WeatherCurrent />
      </div>

      <WeatherDaily />
    </div>
  );
}
