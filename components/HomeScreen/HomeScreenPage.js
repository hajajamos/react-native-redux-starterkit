//import libraries
import React from "react";
import HomeScreen from "./HomeScreen.js";
import { PropTypes } from "prop-types";

/**
 * A HomeScreen component.
 * Just a simple example for page with button that open the drawer.
 * @class HomeScreenPage
 * @extends {React.Component}
 */
class HomeScreenPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.openDrawer = this.openDrawer.bind(this);
	}

	/**
	 * Open the navigation drawer.
	 * @memberof HomeScreenPage
	 */
	openDrawer() {
		this.props.navigation.navigate("DrawerOpen");
	}

	/**
	 * Render the view of HomeScreenPage.
	 * @returns the view of HomeScreenPage.
	 * @memberof HomeScreenPage
	 */
	render() {
		return(
			<HomeScreen openDrawer={this.openDrawer} />
		);
	}
}

HomeScreenPage.propTypes = {
	navigation: PropTypes.object.isRequired
};

//make this component available to the app
export default HomeScreenPage;
