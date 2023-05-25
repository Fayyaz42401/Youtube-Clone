import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/baseUrl";
import { options } from "../../utils/baseUrl";
import axios from "axios";

export const fetchChannelDetail = createAsyncThunk(
  "fetchChannelDetail",
  async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchChannelVideo = createAsyncThunk(
  "fetchChannelVideo",
  async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data.contents;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isLoading: false,
  channelDetail: [],
  channelVideo: [],
};

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelDetail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchChannelDetail.fulfilled, (state, action) => {
        state.channelDetail = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChannelDetail.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(fetchChannelVideo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchChannelVideo.fulfilled, (state, action) => {
        state.channelVideo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchChannelVideo.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = channelSlice.actions;

export default channelSlice.reducer;
