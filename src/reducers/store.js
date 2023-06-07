import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginStatusReducer";
import userReducer from "./userReducer.js";

export const store = configureStore({
  currentUser: userReducer,
  reducer: { loginStatus: loginStatusReducer },
});
