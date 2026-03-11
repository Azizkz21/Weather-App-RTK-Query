import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Units = {
  temperatureUnit: "celsius" | "fahrenheit";
  windSpeedUnit: "kmh" | "mph";
  precipitationUnit: "mm" | "inch";
};

const initialState: Units = {
  temperatureUnit: "celsius",
  windSpeedUnit: "kmh",
  precipitationUnit: "mm",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setTemperatureUnit: (
      state,
      action: PayloadAction<"celsius" | "fahrenheit">,
    ) => {
      state.temperatureUnit = action.payload;
    },
    setWindSpeedUnit: (state, action: PayloadAction<"kmh" | "mph">) => {
      state.windSpeedUnit = action.payload;
    },
    setPrecipitationUnit: (state, action: PayloadAction<"mm" | "inch">) => {
      state.precipitationUnit = action.payload;
    },
    resetUnits: () => initialState,
  },
});

export const {
  setTemperatureUnit,
  setWindSpeedUnit,
  setPrecipitationUnit,
  resetUnits,
} = weatherSlice.actions;
export default weatherSlice.reducer;
