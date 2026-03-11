type Props = {
  day: string;
  iconPath: string;
  maxTemp: number;
  minTemp: number;
};

export default function WeatherDailyList({
  day,
  iconPath,
  maxTemp,
  minTemp,
}: Props) {
  return (
    <li className="flex flex-col items-center justify-center gap-3 px-2 py-4 rounded-2xl bg-neutral800">
      <p className="text-2xl font-medium text-neutral200">{day}</p>

      <img
        src={iconPath}
        alt="Weather Icon"
        className="object-contain h-14 w-14"
      />

      <div className="flex justify-between w-full gap-2">
        <span className="text-lg text-neutral100">{maxTemp}°</span>
        <span className="text-lg text-neutral400">{minTemp}°</span>
      </div>
    </li>
  );
}
