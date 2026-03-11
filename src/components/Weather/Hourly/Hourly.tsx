import { useState } from "react";
import { useWeather } from "../../../hooks/useWeather";
import HourlyList from "./HourlyList";
import HourlyWeekDays from "./HourlyWeekDays";

export default function Hourly() {
  const { data } = useWeather();
  const [currentDate, setCurrentDate] = useState<string>("");

  if (!data) return null;

  const selectedDate = data.daily.time.includes(currentDate)
    ? currentDate
    : data.daily.time[0];

  return (
    <div className="flex flex-col w-full gap-2 px-4 py-2 rounded-2xl bg-neutral800 lg:max-w-440w">
      <div className="flex items-center justify-between gap-2">
        <p className="text-lg text-neutral100">Hourly forecast</p>

        <HourlyWeekDays
          currentDate={selectedDate}
          setCurrentDate={setCurrentDate}
        />
      </div>

      <HourlyList currentDate={selectedDate} />
    </div>
  );
}