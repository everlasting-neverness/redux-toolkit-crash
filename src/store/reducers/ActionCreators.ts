import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* Classic method */
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<Array<IUser>>("https://jsonplaceholder.typicode.com/users");
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e: any) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// }

/* Toolkit method */
export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Array<IUser>>("https://jsonplaceholder.typicode.com/users");
      return response.data;  
    } catch (error) {
      return thunkAPI.rejectWithValue("Error msg")
    }
  }
)