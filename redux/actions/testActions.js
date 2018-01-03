import * as actionsTypes from "./actionsTypes";

export function addNumberToStateSuccess(numberToAdd) {
	return {
		type: actionsTypes.ADD_NUMBER_TO_STATE_SUCCESS,
		numberToAdd: numberToAdd
	};
}

export function addNumberToState(numberToAdd) {
	return(dispatch) => {
		// thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
		// in this case at this point we could call a service that would persist the fuel savings
		return dispatch(addNumberToStateSuccess(numberToAdd));
	};
}
