import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import authenticationReducer from "./authentication_reducer[example]";

export default combineReducers({
  auth: authenticationReducer
  //   form: formReducer //must call it form here
});
