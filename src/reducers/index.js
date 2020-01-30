import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import imagesReducer from "./images_reducer";
import adminReducer from "./admin_reducer";
import annotationReducer from "./annotation_reducer";

export default combineReducers({
  admin: adminReducer,
  annotations: annotationReducer,
  auth: authReducer,
  images: imagesReducer
});
