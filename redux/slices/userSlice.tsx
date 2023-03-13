import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FullUser } from "../../interfaces/fullUser";

interface InitialState {
  error: boolean;
  loading: boolean;
  userFull: FullUser | null;
}

const initialState: InitialState = {
  error: false,
  loading: false,
  userFull: null,
};

export const getFullUser = createAsyncThunk(
  "/loginUser",
  async (id: number) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);

    return response.data;
  }
);

const fullUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFullUser.fulfilled, (state, { payload }) => {
      state.userFull = payload;
      state.loading = false;
      state.error = false;
    });

    builder.addCase(getFullUser.pending, (state) => {
      state.userFull = null;
      state.error = false;
      state.loading = true;
    });

    builder.addCase(getFullUser.rejected, (state) => {
      state.userFull = null;
      state.error = true;
      state.loading = false;
    });
  },
});

export default fullUserSlice.reducer;
