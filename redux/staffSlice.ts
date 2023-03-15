import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitStaff {
  staffNumber: string;
  staffName: string;
  staffEmail: string;
  department: string;
  salary: string;
}

interface Staff {
  staffNumber: string;
  staffName: string;
  staffEmail: string;
  department: string;
  salary: string;
  _id: string;
}

interface InitialState {
  staffError: boolean;
  staffLoading: boolean;
  staffData: Staff[] | null;
}

const initialState: InitialState = {
  staffError: false,
  staffLoading: false,
  staffData: null,
};

const url = "https://crudcrud.com/api/8127a2defb7142019dff8c390672fa59/zamara";

export const getAllStaff = createAsyncThunk("/getAllStaff", async () => {
  const response = await axios.get(url);

  return response.data;
});

export const createStaff = createAsyncThunk(
  "/createStaff",
  async (data: InitStaff) => {
    const response = await axios.post(url, data);

    return response.data;
  }
);

export const updateStaff = createAsyncThunk(
  "/updateStaff",
  async (data: any) => {
    const id = data._id;
    const newData = data.dataT;
    const response = await axios.put(`${url}/${id}`, newData);

    return response.data;
  }
);

export const deleteStaff = createAsyncThunk(
  "/deleteStaff",
  async (id: string) => {
    const response = await axios.delete(`${url}/${id}`);

    return response.data;
  }
);

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStaff.fulfilled, (state, { payload }) => {
      state.staffData = payload;
      state.staffLoading = false;
      state.staffError = false;
    });

    builder.addCase(getAllStaff.pending, (state) => {
      state.staffData = null;
      state.staffError = false;
      state.staffLoading = true;
    });
    builder.addCase(getAllStaff.rejected, (state) => {
      state.staffData = null;
      state.staffError = true;
      state.staffLoading = false;
    });
    //CreateStaff

    builder.addCase(createStaff.fulfilled, (state, { payload }) => {
      state.staffData?.push(payload);
      state.staffLoading = false;
      state.staffError = false;
    });

    builder.addCase(createStaff.pending, (state) => {
      state.staffError = false;
      state.staffLoading = true;
    });
    builder.addCase(createStaff.rejected, (state) => {
      state.staffData = null;
      state.staffError = true;
      state.staffLoading = false;
    });
    builder.addCase(updateStaff.fulfilled, (state, { payload }) => {
      state.staffData
        ?.filter((data) => data._id !== payload._id)
        .unshift(payload);
      state.staffError = true;
      state.staffLoading = false;
    });
    builder.addCase(updateStaff.pending, (state) => {
      state.staffError = false;
      state.staffLoading = true;
    });

    builder.addCase(updateStaff.rejected, (state, { payload }) => {
      state.staffError = true;
      state.staffLoading = false;
    });
  },
});

export default staffSlice.reducer;
