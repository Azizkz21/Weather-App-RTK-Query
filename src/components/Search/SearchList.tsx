import { useAppDispatch } from "../../hooks/hooks";
import { setSelectedCity } from "../../features/search/citiesSlice";

type Props = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export default function SearchList({
  id,
  name,
  country,
  latitude,
  longitude,
  timezone,
}: Props) {
  const dispatch = useAppDispatch();
  return (
    <li className="w-full">
      <button
        className="z-30 block w-full px-1 py-4 text-left transition rounded-md shadow-light text-font bg-neutral800 text-neutral100 hover:bg-blue500"
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          dispatch(
            setSelectedCity({
              id: id,
              name: name,
              country: country,
              latitude: latitude,
              longitude: longitude,
              timezone: timezone,
            }),
          );
        }}
      >
        {name}, {country}
      </button>
    </li>
  );
}
