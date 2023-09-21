import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import portfolioReducer from "../features/portfolioSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    portfolio: portfolioReducer,
  },
});
