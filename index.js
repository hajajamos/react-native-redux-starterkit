import { AppRegistry } from "react-native";
import React from "react";
import HomeScreen from "./components/HomeScreen/HomeScreenPage";
import SideBar from "./components/SideBar/SideBar";
import { DrawerNavigator } from "react-navigation";

const routes = {
	"Home": { screen: HomeScreen }
};

const HomeScreenRouter = DrawerNavigator(routes, {
	contentComponent: props => (<SideBar navigation={props.navigation} routes={Object.keys(routes)} />)
});

AppRegistry.registerComponent("test", () => HomeScreenRouter);
