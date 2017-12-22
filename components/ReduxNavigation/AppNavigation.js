import { DrawerNavigator } from 'react-navigation';
import HomeScreen from "../HomeScreen/HomeScreenPage";
import TestRedux from '../TestRedux/TestRedux';



// drawer stack
const PrimaryNav = DrawerNavigator({
	HomeScreen: { screen: HomeScreen },
	TestRedux: { screen: TestRedux },
}, {
	gesturesEnabled: true,
	// contentComponent: SideMenu,
	headerMode: 'screen',
});

export default PrimaryNav;
