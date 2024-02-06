import { configureStore } from "@reduxjs/toolkit";

import tableDataSlice from "./slice/tableDataSlice";

// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  // Use persistReducer to enable data persistence
  reducer: {
    data: tableDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
