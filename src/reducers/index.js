import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import imagesReducer from "./images_reducer";
import adminReducer from "./admin_reducer";
import annotationReducer from "./annotation_reducer";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
// The bootwatch theme I used: https://bootswatch.com/flatly/

export default combineReducers({
  admin: adminReducer,
  annotations: annotationReducer,
  auth: authReducer,
  images: imagesReducer
});
