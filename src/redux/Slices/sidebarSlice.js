import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarHandler: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { sidebarHandler } = sidebarSlice.actions;

export default sidebarSlice.reducer;
