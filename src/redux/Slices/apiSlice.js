import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/baseUrl";
import { options } from "../../utils/baseUrl";
import axios from "axios";
export const fetchVideo = createAsyncThunk("fetchVideo", async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, options);
    return data.contents;
  } catch (error) {
    console.log(error);
  }
});
export const fetchCategoryVideo = createAsyncThunk(
  "fetchCategoryVideo",
  async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data.contents;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchVideoDetail = createAsyncThunk(
  "fetchVideoDetail",
  async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchRelatedVideo = createAsyncThunk(
  "fetchRelatedVideo",
  async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchSearchVideo = createAsyncThunk(
  "fetchSearchVideo",
  async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isLoading: false,
  videos: [],
  categoryVideos: [],
  categoryName: "",
  videoDetail: [],
  relatedVideo: [],
  query: "",
  searchVideo: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchCategory: (state, action) => {
      state.categoryName = action.payload;
    },
    queryHandler: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchVideo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCategoryVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoryVideo.fulfilled, (state, action) => {
        state.categoryVideos = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategoryVideo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchVideoDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideoDetail.fulfilled, (state, action) => {
        state.videoDetail = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchVideoDetail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.relatedVideo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRelatedVideo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchSearchVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchVideo.fulfilled, (state, action) => {
        state.searchVideo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSearchVideo.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { fetchCategory, queryHandler } = apiSlice.actions;

export default apiSlice.reducer;
