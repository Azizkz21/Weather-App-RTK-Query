import { useGetCitiesQuery } from "../../features/search/citiesApi";
import {
  closeDropdown,
  openDropdown,
  setSearch,
} from "../../features/search/citiesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import SearchList from "./SearchList";

export default function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((s) => s.cities.searchText);
  const isDropdownOpen = useAppSelector((s) => s.cities.isDropdownOpen);
  const debouncedSearch = useDebouncedValue(search, 400);
  const { data } = useGetCitiesQuery(debouncedSearch, {
    skip: debouncedSearch.trim().length < 2,
  });
  const results = data?.results ?? [];

  return (
    <div className="mx-auto flex max-w-1440w flex-col items-center justify-between gap-8 px-4 py-3 lg:pt-10">
      <h1 className="text-center text-2xl font-bold text-neutral100 sm:text-3xl lg:text-4xl xl:text-5xl">
        How's the sky looking today
      </h1>
      <form
        className="flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative w-full">
          <label htmlFor="search" className="relative w-full">
            <img
              className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2"
              src="./images/icon-search.svg"
              width={21}
              height={21}
              loading="lazy"
              alt="search"
            />
            <input
              className="shadow-light text-font block w-full rounded-md bg-neutral800 py-2 pl-10 pr-4 text-base text-neutral100 sm:py-4"
              type="text"
              name="search"
              id="search"
              value={search}
              onBlur={() => dispatch(closeDropdown())}
              onFocus={() => {
                if (search.trim().length >= 2) dispatch(openDropdown());
              }}
              onChange={(e) => {
                const value = e.target.value;
                dispatch(setSearch(value));

                if (value.trim().length >= 2) dispatch(openDropdown());
                else dispatch(closeDropdown());
              }}
              placeholder="Search for a country..."
              autoComplete="off"
            />
          </label>

          {isDropdownOpen && results.length > 0 && (
            <ul className="absolute left-0 top-top120 z-50 flex w-full flex-col gap-0 rounded-md bg-neutral800 p-2">
              {results.map((item) => (
                <SearchList {...item} key={item.id} />
              ))}
            </ul>
          )}
        </div>

        <button
          className="flex w-full items-center justify-center gap-1 rounded-md border-1p border-transparent bg-blue500 px-4 py-2 text-center text-base transition hover:border-blue500 hover:bg-neutral100 hover:text-blue500 sm:w-auto sm:py-3"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
