import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  // Slice nmae
  name: "filters",
  // first condition of the slice reducer
  initialState: { name: "" },
  // reducer´s obj.
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// action gen
export const { changeFilter } = filtersSlice.actions;
// slice reducer
export const filterReducer = filtersSlice.reducer;
