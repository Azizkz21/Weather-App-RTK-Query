import { configureStore } from "@reduxjs/toolkit";
import { citiesApi } from "../features/search/citiesApi";
import citiesReducer from "../features/search/citiesSlice";
import { weatherApi } from "../features/weather/weatherApi";
import weatherReducer from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    weather: weatherReducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware, weatherApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
