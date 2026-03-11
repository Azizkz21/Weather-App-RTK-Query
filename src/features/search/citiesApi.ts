import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type GeoItem = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

type GeoResponse = {
  results: GeoItem[];
};

export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geocoding-api.open-meteo.com/v1/",
  }),
  endpoints: (builder) => ({
    getCities: builder.query<GeoResponse, string>({
      query: (name) =>
        `search?name=${encodeURIComponent(name)}&count=5&language=en&format=json`,
    }),
  }),
});

export const { useGetCitiesQuery } = citiesApi;
