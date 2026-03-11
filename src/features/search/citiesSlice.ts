import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SelectedCity } from "../../types/types";

type GeoList = {
  searchText: string;
  selectedCity: SelectedCity | null;
  isDropdownOpen: boolean;
};

const initialState: GeoList = {
  searchText: "",
  selectedCity: null,
  isDropdownOpen: false,
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      // state.selectedCity = null;
    },
    setSelectedCity: (state, action: PayloadAction<SelectedCity>) => {
      state.selectedCity = action.payload;
      state.searchText = "";
      state.isDropdownOpen = false;
    },
    openDropdown: (state) => {
      state.isDropdownOpen = true;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    resetSearch: (state) => {
      state.searchText = "";
      state.selectedCity = null;
      state.isDropdownOpen = false;
    },
  },
});

export const {
  setSearch,
  setSelectedCity,
  resetSearch,
  openDropdown,
  closeDropdown,
} = citiesSlice.actions;
export default citiesSlice.reducer;
