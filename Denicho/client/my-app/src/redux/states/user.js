import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../utils/ localStorage.utility";

export const EmptyUserState = {
  token: "",
  user: {
    id: "",
    email: "",
    role: "",
  },
};

export const UserKey = "session";

export const userSlice = createSlice({
  name: "session",
  initialState: localStorage.getItem("session")
    ? JSON.parse(localStorage.getItem("session"))
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
