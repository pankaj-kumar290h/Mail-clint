import { configureStore } from "@reduxjs/toolkit";
import AllMailReducer from "./Allmailreducer";
import SelectedMailReducer from "./SelectedMailReducer";

const store = configureStore({
  reducer: {
    AllMails: AllMailReducer,
    Selectedmail: SelectedMailReducer,
  },
});

export default store;
