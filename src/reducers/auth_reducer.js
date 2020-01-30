const defaultState = {
  token: sessionStorage.getItem("token") || null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "AUTH_TOKEN":
      return { ...state, token: action.payload };
    case "USER_INFO":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
