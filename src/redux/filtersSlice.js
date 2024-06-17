import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE,
  // red. obj.
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
// act generator
export const { changeFilter } = filtersSlice.actions;
// slice reducer
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
