import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";
import HomeScreen from "../HomeScreen/HomeScreenPage";
import SideBar from "../SideBar/SideBar";
import TestReduxPage from "./../TestRedux/TestReduxPage";

const noTransitionConfig = () => ({
	transitionSpec: {
		duration: 0,
		timing: Animated.timing,
		easing: Easing.step0
	}
});

const drawerStackRoutes = {
	"HomeScreen": { screen: HomeScreen },
	"TestReduxPage": { screen: TestReduxPage },
};

const DrawerStack = DrawerNavigator(
	drawerStackRoutes, {
		gesturesEnabled: true,
		contentComponent: (navProps) => (<SideBar navigation={navProps.navigation} routes={Object.keys(drawerStackRoutes)}/>),
		drawerOpenRoute: "DrawerOpen",
		drawerCloseRoute: "DrawerClose",
		drawerToggleRoute: "DrawerToggle"
	});

// drawer stack
const PrimaryNav = StackNavigator({
	drawerStack: { screen: DrawerStack }
}, {
	// Default config for all screens
	headerMode: "none",
	title: "Main",
	initialRouteName: "drawerStack",
	transitionConfig: noTransitionConfig,
});

export default PrimaryNav;
