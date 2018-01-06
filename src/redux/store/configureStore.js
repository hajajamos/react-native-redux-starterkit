import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import getRootReducer from "./../reducers/rootReducer";

export default function getStore() {
	const logger = createLogger();
	const store = createStore(
		getRootReducer(),
		applyMiddleware(logger, reduxImmutableStateInvariant(), thunk),
	);
	return store;
}
