import actionTypes from '../actionTypes';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type:actionTypes.FETCH_POSTS , payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get('/users')
  dispatch({ type:actionTypes.FETCH_USERS, payload: response.data });
};