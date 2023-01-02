import { IUser } from './../../models/IUser';
import { AppDispatch } from './../store';
import axios from "axios";
import {userSlice} from "./UserSlice";
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.fetchUsersRequest());
//       const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
//       const users = response.data;
//       dispatch(userSlice.actions.fetchUsersSuccess(users));
//     } catch (error) {
//       dispatch(userSlice.actions.fetchUsersFailure((error as Error).message));
//     }
//   };
// };

export const fetchUsersWithToolkit = createAsyncThunk(
  'user/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
