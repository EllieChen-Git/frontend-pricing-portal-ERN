export default (state = [], action) => {
  switch (action.type) {
    case "SET_ANNOTATIONS":
      return action.payload;
    default:
      return state;
  }
};
