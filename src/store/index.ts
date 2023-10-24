import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { invoicesSlice } from "@/store/invoices";
import { invoiceFormSlice } from "@/store/invoiceForm";
import { sidebarSlice } from "@/store/sidebar";

export function makeStore() {
  return configureStore({
    reducer: {
      invoices: invoicesSlice.reducer,
      invoiceForm: invoiceFormSlice.reducer,
      sidebar: sidebarSlice.reducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
