import { useEffect, useRef, useState } from "react";
import { useWeather } from "../../../hooks/useWeather";

type Props = {
  currentDate: string;
  setCurrentDate: (date: string) => void;
};

export default function HourlyWeekDays({ currentDate, setCurrentDate }: Props) {
  const { data } = useWeather();
  const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!openRef.current) return;

      const target = e.target as Node;
      if (!openRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);
  if (!data) return null;
  const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
  return (
    <div ref={openRef} className="relative">
      <button
        type="button"
        className={`flex items-center gap-1 rounded-md border-1p border-neutral600 bg-neutral800 px-4 py-2`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {dayFormatter.format(new Date(currentDate))}
        <img
          src="/images/icon-dropdown.svg"
          width={13}
          height={8}
          alt="dropdown"
        />
      </button>
      <ul
        className={`absolute right-0 top-top120 z-50 flex w-160p flex-col gap-0 rounded-md border-1p border-neutral600 bg-neutral800 p-2 ${
          isOpen ? "visible opacity-100" : "hidden opacity-0"
        }`}
      >
        {data.daily.time.map((time, index) => {
          const formattedDay = dayFormatter.format(new Date(time));
          const isActive = time === currentDate;
          return (
            <li className="w-full" key={index}>
              <button
                className={`shadow-light text-font z-30 block w-full rounded-md px-1 py-2 text-left text-neutral100 transition hover:bg-blue500 ${isActive ? "bg-blue500" : "bg-neutral800"}`}
                type="button"
                onClick={() => {
                  setCurrentDate(time);
                  setIsOpen(false);
                }}
              >
                {formattedDay}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
