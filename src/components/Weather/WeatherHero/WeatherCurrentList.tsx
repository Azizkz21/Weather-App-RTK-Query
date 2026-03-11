type Props = {
  title: string;
  value?: number;
  unit?: string;
};

export default function WeatherCurrentList({ title, value, unit }: Props) {
  const displayValue = value !== undefined ? Math.round(value) : "--";

  return (
    <li className="flex flex-col gap-4 px-4 py-4 rounded-2xl bg-neutral800">
      <div className="flex items-center gap-2">
        <p className="text-base text-neutral200">{title}</p>
      </div>
      <p className="text-4xl text-neutral100">
        {displayValue} <span className="text-3xl">{unit}</span>
      </p>
    </li>
  );
}
