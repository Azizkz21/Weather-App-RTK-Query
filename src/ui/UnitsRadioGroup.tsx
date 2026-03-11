type Option<T extends string> = {
  id: string;
  label: string;
  value: T;
};

type Props<T extends string> = {
  legend: string;
  name: string;
  value: T;
  options: [Option<T>, Option<T>];
  onChange: (value: T) => void;
};

export function UnitsRadioGroup<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
}: Props<T>) {
  return (
    <fieldset className="border-b-1p flex flex-col gap-1 border-neutral200 pb-2 last:border-b-0 last:pb-0">
      <legend className="mb-1 p-1 text-neutral300">{legend}</legend>

      {options.map((opt) => (
        <label
          key={opt.id}
          htmlFor={opt.id}
          className={`relative w-full cursor-pointer rounded-md p-1 ${
            value === opt.value ? "bg-neutral700" : "bg-transparent"
          }`}
        >
          <input
            className="peer sr-only"
            type="radio"
            name={name}
            id={opt.id}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <span>{opt.label}</span>

          <span className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
            <img
              src="./images/icon-checkmark.svg"
              width={14}
              height={11}
              loading="lazy"
              alt="checkmark"
            />
          </span>
        </label>
      ))}
    </fieldset>
  );
}
