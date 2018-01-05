import React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";

/**
 * Navigation component works with redux.
 * @param reduxProps contains nav and dispatch for redux. 
 * @returns AppNavigation with navigation prop.
 */
function ReduxNavigation(reduxProps) {
	const { dispatch, nav } = reduxProps;
	const navigation = ReactNavigation.addNavigationHelpers({
		dispatch,
		state: nav
	});

	return(<AppNavigation navigation={navigation} />);
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
