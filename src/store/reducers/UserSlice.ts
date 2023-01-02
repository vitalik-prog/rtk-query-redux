import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsersWithToolkit } from "./ActionCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // fetchUsersRequest: (state) => {
    //   state.isLoading = true;
    // },
    // fetchUsersSuccess: (state, action: PayloadAction<IUser[]>) => {
    //   state.isLoading = false;
    //   state.users = action.payload;
    //   state.error = null;
    // },
    // fetchUsersFailure: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   state.users = [];
    // }
  },
  extraReducers: {
    [fetchUsersWithToolkit.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsersWithToolkit.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    [fetchUsersWithToolkit.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.users = [];
    },
  }
});

export default userSlice.reducer;
