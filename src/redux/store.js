import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/sidebarSlice";
import apiReducer from "./Slices/apiSlice";
import channelReducer from "./Slices/channelSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    api: apiReducer,
    channel: channelReducer,
  },
});
