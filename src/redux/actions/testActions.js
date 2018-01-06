import * as actionsTypes from "./actionsTypes";

/**
 * Change the state according to 'ADD_NUMBER_TO_STATE_SUCCESS' action type. 
 * @param {number} numberToAdd number to add to the state.
 */
export function addNumberToStateSuccess(numberToAdd) {
	return {
		type: actionsTypes.ADD_NUMBER_TO_STATE_SUCCESS,
		numberToAdd: numberToAdd
	};
}

/**
 * Try to add number to the state.
 * On success - change the number.
 * otherwise, do nothing.
 * @param {number} numberToAdd 
 * @returns function for redux use with "redux thunk".
 */
export function addNumberToState(numberToAdd) {
	return(dispatch) => {
		// thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
		// in this case at this point we could call a service that would persist the fuel savings
		return dispatch(addNumberToStateSuccess(numberToAdd));
	};
}
