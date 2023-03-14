import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/authSlice";
import fullUserSlice from "./slices/userSlice";
import staffSlice from "./staffSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    fullUser: fullUserSlice,
    staff: staffSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
