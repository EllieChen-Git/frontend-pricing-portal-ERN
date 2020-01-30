export default (state = {users: null}, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
