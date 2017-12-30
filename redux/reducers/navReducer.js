import AppNavigation from '../../components/ReduxNavigation/AppNavigation';

/**
 * A reducer to handle the navigation state by redux.
 * @param {any} state The state to set.
 * @param {any} action Redux action object. 
 */
export default function(state, action) {
	const newState = AppNavigation.router.getStateForAction(action, state);
	return newState || state;
}
