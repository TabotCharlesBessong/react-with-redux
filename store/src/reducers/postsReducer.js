import actionTypes from "../actionTypes";

export default  (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};
