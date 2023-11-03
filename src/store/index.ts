import {
  configureStore,
  combineReducers,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore, Storage } from "redux-persist";

import { invoicesSlice } from "@/store/invoices";
import { invoiceFormSlice } from "@/store/invoiceForm";
import { sidebarSlice } from "@/store/sidebar";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = (): Storage => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  whitelist: ["invoices"],
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  invoices: invoicesSlice.reducer,
  invoiceForm: invoiceFormSlice.reducer,
  sidebar: sidebarSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    preloadedState: {},
  });
}

export const store = makeStore();
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
