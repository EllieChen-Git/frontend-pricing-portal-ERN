import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import imagesReducer from "./images_reducer";

export default combineReducers({
  images: imagesReducer,
  form: formReducer
});
