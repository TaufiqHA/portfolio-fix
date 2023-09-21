import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "react-dotenv";

const initialState = {
  portfolio: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const getPortfolio = createAsyncThunk(
  "portfolio/getPortfolio",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${env.HOST_API}/portfolio`);
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const createPortfolio = createAsyncThunk(
  "portfolio/create",
  async (portfolio, thunkAPI) => {
    const formData = new FormData();
    formData.append("file", portfolio.file);
    formData.append("title", portfolio.title);
    try {
      await axios.post(`${env.HOST_API}/portfolio`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const updatePortfolio = createAsyncThunk(
  "portfolio/update",
  async (portfolio, thunkAPI) => {
    const formData = new FormData();
    formData.append("title", portfolio.title);
    formData.append("file", portfolio.file);
    try {
      await axios.patch(`${env.HOST_API}/portfolio/${portfolio.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getPortfolio.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPortfolio.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.portfolio = action.payload;
    });
    builder.addCase(getPortfolio.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = portfolioSlice.actions;
export default portfolioSlice.reducer;
