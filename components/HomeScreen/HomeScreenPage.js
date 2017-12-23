//import liraries
import React from "react";
import HomeScreen from "./HomeScreen.js";
import PropTypes from "prop-types";

// create a component
class HomeScreenPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.openDrawer = this.openDrawer.bind(this);
	}

	openDrawer() {
		this.props.navigation.navigate("DrawerOpen");
	}

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
