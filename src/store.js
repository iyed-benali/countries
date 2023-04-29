import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from "./features/countriesSlice";
const store = configureStore({
  reducer: {},
});

export default store;
