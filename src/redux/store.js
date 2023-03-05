import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import postReducer from "./postSlice";

export const store = configureStore({

  reducer: {
    settings: settingsReducer,
    post: postReducer
  },
  
});