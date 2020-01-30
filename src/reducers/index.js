import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import imagesReducer from "./images_reducer";
import admin_reducer from "./admin_reducer";

export default combineReducers({
  admin: admin_reducer,
  auth: authReducer,
  images: imagesReducer
});
