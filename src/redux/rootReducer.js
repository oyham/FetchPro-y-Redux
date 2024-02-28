// rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import userProReducer from "./userProSlice";

const rootReducer = combineReducers({
  user: userReducer,
  userPro: userProReducer,
});

export default rootReducer;
