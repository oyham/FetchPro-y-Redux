import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "", //null
  username: "", //null
  email: "",
};

export const userSlice = createSlice({
  name: "userPro",
  initialState,
  reducers: {
    addUserPro: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addUserPro, changeEmail, changeName } = userSlice.actions;
export default userSlice.reducer;
