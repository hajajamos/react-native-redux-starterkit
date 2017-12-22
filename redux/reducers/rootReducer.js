import { combineReducers } from 'redux';
import testReducer from "./testReducer";
// import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default function getRootReducer() {
	const RootReducer = combineReducers({
		firstSlice: testReducer,
	});

	return RootReducer;
}
