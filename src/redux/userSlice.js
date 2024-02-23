import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  username: null,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    addUserPro: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
  },
});

export const { addUser, changeEmail, addUserPro } = userSlice.actions;
export default userSlice.reducer;
