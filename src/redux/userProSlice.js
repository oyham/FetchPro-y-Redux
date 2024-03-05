import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
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
  },
});

export const { addUserPro } = userSlice.actions;
export default userSlice.reducer;
