import LocalApi from "./../apis/LocalApi";

export const setAuthToken = (token = null) => {
  sessionStorage.setItem("token", token);
  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

export const setUserInfo = (user = null) => {
  return {
    type: "USER_INFO",
    payload: user
  };
};

export const fetchImages = () => {
  return async (dispatch) => {
    let response = await LocalApi.get("/images");
    return dispatch({
      type: "SET_IMAGES",
      payload: response.data
    });
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    let response = await LocalApi.get("/users");
    return dispatch({
      type: "SET_USERS",
      payload: response.data
    });
  }
}

export const fetchAnnotations = () => {
  return async (dispatch) => {
    let response = await LocalApi.get("/annotations");
    return dispatch({
      type: "SET_ANNOTATIONS",
      payload: response.data
    });
  }
}