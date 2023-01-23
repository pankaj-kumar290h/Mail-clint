import { createSlice } from "@reduxjs/toolkit";

const SelectMail = createSlice({
  name: "SelectedMail",
  initialState: 1,
  reducers: {
    SelectedMail(state, action) {
      return (state = action.payload);
    },
  },
});

export const { SelectedMail } = SelectMail.actions;
export default SelectMail.reducer;
