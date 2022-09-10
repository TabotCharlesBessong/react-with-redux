
import actionTypes from "../actionTypes";

export default (state = [], action) => {
	switch (action.type) {
		case actionTypes.FETCH_USERS:
			return action.payload;
		default:
			return state;
	}
};
