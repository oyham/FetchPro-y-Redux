import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import userReducer from "./userProSlice";

/* export const store = configureStore({
  reducer: {
    user: userReducer,
    userPro: userReducer,
  },
}); */
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
