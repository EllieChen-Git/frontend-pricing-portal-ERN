import LocalApi from "./../apis/LocalApi";

export const setImages = images => {
  return {
    type: "SET_IMAGES",
    payload: images
  };
};

export const fetchImages = () => {
  return async (dispatch, getState) => {
    let response = await LocalApi.get("/images");
    return dispatch({
      type: "SET_IMAGES",
      payload: response.data
    });
  };
};

//[Use later? - Unable to use redux to create apartments]
// export const createImages = image => {
//   return async (dispatch, getState) => {
//     const response = await LocalApi.post("/images", image);
//     return dispatch({
//       type: "SET_IMAGES",
//       payload: response.data
//     });
//   };
// };
