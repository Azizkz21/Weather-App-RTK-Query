import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type WeatherArgs = {
  lat: number;
  lng: number;
  temperatureUnit: "celsius" | "fahrenheit";
  windSpeedUnit: "kmh" | "mph";
  precipitationUnit: "mm" | "inch";
  timezone: "auto" | string;
};
type WeatherResponse = {
  latitude: number;
  longitude: number;

  current_units: {
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    precipitation: string;
    wind_speed_10m: string;
  };

  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    weather_code: number;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    weather_code: number[];
  };

  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    weather_code: number[];
  };
};

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.open-meteo.com/v1/" }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, WeatherArgs>({
      query: ({
        lat,
        lng,
        temperatureUnit,
        windSpeedUnit,
        precipitationUnit,
        timezone,
      }) =>
        `forecast?latitude=${lat}&longitude=${lng}` +
        `&temperature_unit=${temperatureUnit}` +
        `&wind_speed_unit=${windSpeedUnit}` +
        `&precipitation_unit=${precipitationUnit}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code` +
        `&timezone=${timezone}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
