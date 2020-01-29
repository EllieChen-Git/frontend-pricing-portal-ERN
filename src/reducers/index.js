import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import imagesReducer from "./images_reducer";

export default combineReducers({
  auth: authReducer,
  images: imagesReducer,
  form: formReducer
});
