import { createStore, applyMiddleware, compose } from "redux";
import state from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(state, composeEnhancers(applyMiddleware(thunk)));
