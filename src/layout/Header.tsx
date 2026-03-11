import { useEffect, useRef, useState } from "react";
import {
  setPrecipitationUnit,
  setTemperatureUnit,
  setWindSpeedUnit,
} from "../features/weather/weatherSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { UnitsRadioGroup } from "../ui/UnitsRadioGroup";

export default function Header() {
  const dispatch = useAppDispatch();
  const units = useAppSelector((s) => s.weather);
  const [isOpenUnits, setIsOpenUnits] = useState(false);

  const unitsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!unitsRef.current) return;

      const target = e.target as Node;
      if (!unitsRef.current.contains(target)) {
        setIsOpenUnits(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="flex items-center justify-between gap-4 px-4 py-3 mx-auto max-w-1440w lg:py-6">
        <span className="block">
          <img
            src="/images/logo.svg"
            width={197}
            height={40}
            loading="lazy"
            alt="logo"
          />
        </span>

        <div ref={unitsRef} className="relative flex flex-col gap-2">
          <button
            type="button"
            className="flex items-center gap-1 px-4 py-2 rounded-md border-1p border-neutral600 bg-neutral800"
            onClick={() => setIsOpenUnits((prev) => !prev)}
          >
            <img
              src="/images/icon-units.svg"
              width={16}
              height={16}
              alt="units"
            />
            Units
            <img
              src="/images/icon-dropdown.svg"
              width={13}
              height={8}
              alt="dropdown"
            />
          </button>

          <div
            className={`absolute right-0 top-top110 z-30 flex w-160p border-1p border-neutral600  flex-col gap-2 rounded-md bg-neutral800 px-2 py-2 transition ${
              isOpenUnits ? "visible opacity-100" : "hidden opacity-0"
            }`}
          >
            <p className="p-1 text-sm">Switch to Imperial</p>

            <UnitsRadioGroup
              legend="Temperature"
              name="temperature"
              value={units.temperatureUnit}
              options={[
                { id: "celsius", label: "Celsius (C)", value: "celsius" },
                {
                  id: "fahrenheit",
                  label: "Fahrenheit (F)",
                  value: "fahrenheit",
                },
              ]}
              onChange={(v) => dispatch(setTemperatureUnit(v))}
            />

            <UnitsRadioGroup
              legend="Wind Speed"
              name="wind-speed"
              value={units.windSpeedUnit}
              options={[
                { id: "kmh", label: "km/h", value: "kmh" },
                { id: "mph", label: "mph", value: "mph" },
              ]}
              onChange={(v) => dispatch(setWindSpeedUnit(v))}
            />

            <UnitsRadioGroup
              legend="Precipitation"
              name="precipitation"
              value={units.precipitationUnit}
              options={[
                { id: "millimeters", label: "Millimeters (mm)", value: "mm" },
                { id: "inches", label: "inches (in)", value: "inch" },
              ]}
              onChange={(v) => dispatch(setPrecipitationUnit(v))}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
