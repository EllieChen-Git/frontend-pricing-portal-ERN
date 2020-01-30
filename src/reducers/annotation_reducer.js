export default (state = {all: [], current: null}, action) => {
  switch (action.type) {
    case "SET_ANNOTATIONS":
      return { ...state, all: action.payload };
    case "SET_CURRENT_ANNOTATION":
      return { ...state, current: action.payload };
    default:
      return state;
  }
};
