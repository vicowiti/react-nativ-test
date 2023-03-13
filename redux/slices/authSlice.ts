import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

interface InitialState {
  isLoading: boolean;
  isError: boolean;
  user: User | null;
}

interface LoginCredentials {
  username: string;
  password: string;
}

const initialState: InitialState = {
  isError: false,
  isLoading: false,
  user: null,
};

export const loginUser = createAsyncThunk(
  "/loginUser",
  async (userData: LoginCredentials) => {
    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      userData
    );

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isError = false;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.user = null;
      state.isError = false;
      state.isLoading = true;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.user = null;
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
