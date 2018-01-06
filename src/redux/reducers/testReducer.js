import initialState from "../store/initialState";
import * as actionsTypes from "../actions/actionsTypes";

export default function(state = initialState.firstSlice, action) {
	switch(action.type) {
		case actionsTypes.ADD_NUMBER_TO_STATE_SUCCESS:
			const newState = Object.assign({}, state);
			newState.test1 = newState.test1 + action.numberToAdd;
			return newState;
		default:
			return state;
	}
}
