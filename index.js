import { AppRegistry } from "react-native";
import React from "react";
import HomeScreen from "./components/HomeScreen/HomeScreenPage";
import SideBar from "./components/SideBar/SideBar";
import { DrawerNavigator } from "react-navigation";
import { Provider } from 'react-redux';
import getStore from './redux/store/configureStore';
import TestReduxPage from './components/TestRedux/TestReduxPage';

const routes = {
	"Home": { screen: HomeScreen },
	"TestRedux": { screen: TestReduxPage },
};

const HomeScreenRouter = DrawerNavigator(routes, {
	contentComponent: props => (<SideBar navigation={props.navigation} routes={Object.keys(routes)} />)
});

const store = getStore();
const test = () => {
	return(
		<Provider store={store}>
				<HomeScreenRouter/>
		</Provider>
	);
};

AppRegistry.registerComponent("test", () => test);
