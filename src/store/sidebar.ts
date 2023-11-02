import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { SidebarInitialState, SidebarContentView } from "@/types/sidebar";
import { AppState } from "@/store";

const initialState: SidebarInitialState = {
  isOpen: false,
  contentView: null,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      const nextState = !state.isOpen;

      if (nextState === false) {
        state.contentView = null;
      }

      state.isOpen = nextState;
    },
    setSidebarContentView: (
      state,
      action: PayloadAction<SidebarContentView>
    ) => {
      state.contentView = action.payload;
    },
  },
});

const sidebarState = (state: AppState) => state.sidebar;

export const selectIsSidebarOpen = createSelector(
  [sidebarState],
  (sidebar) => sidebar.isOpen
);

export const selectContentView = createSelector(
  [sidebarState],
  (sidebar) => sidebar.contentView
);

export const { toggleSidebar, setSidebarContentView } = sidebarSlice.actions;

export default sidebarSlice.reducer;
