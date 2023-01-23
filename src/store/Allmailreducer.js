import { createSlice } from "@reduxjs/toolkit";

import { data } from "./data";
const AllMail = createSlice({
  name: "AllMail",
  initialState: data,
  reducers: {
    DeletMail(state, action) {
      return (state = state.filter((e) => e.id !== action.payload));
    },
    ChangeRead(state, action) {
      const m = state.map((e) => {
        if (e.id === action.payload) {
          e.isRead = true;
        }
        return e;
      });
      state = m;
    },
  },
});

export const { ChangeRead, DeletMail } = AllMail.actions;

export default AllMail.reducer;
