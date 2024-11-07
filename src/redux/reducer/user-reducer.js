import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    accsessToken: null,
    user: null,
  },
  reducers: {
    createUser: (_, action) => {
      return { ...action.payload };
    },
    removeUser: () => {
      return {
        accsessToken: null,
        user: null,
      };
    },
  },
});

export default userReducer.reducer;
export const { createUser, removeUser } = userReducer.actions;
