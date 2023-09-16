import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import portfolioSlice from "../features/portfolioSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    portfolio: portfolioSlice,
  },
});
