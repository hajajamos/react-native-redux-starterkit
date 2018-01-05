import { AppRegistry } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import getStore from "./redux/store/configureStore";
import ReduxNavigation from "./components/ReduxNavigation/ReduxNavigation";

const store = getStore();

const test = () => {
	return(
		<Provider store={store}>
				<ReduxNavigation/>
		</Provider>
	);
};

AppRegistry.registerComponent("test", () => test);