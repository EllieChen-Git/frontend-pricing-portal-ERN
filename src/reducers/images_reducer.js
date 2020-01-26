export default (state = [], action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return action.payload;
    default:
      return state;
  }
};
