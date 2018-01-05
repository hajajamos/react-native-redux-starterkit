import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/testActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import TestRedux from "./TestRedux";

/**
 * An component to example redux flow.
 * @class TestReduxPage
 * @extends {React.Component}
 */
export class TestReduxPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			numberToAdd: 0
		};
		//Bind the methods for context "this".
		this.drawerOpen = this.drawerOpen.bind(this);
		this.incrementNumberFunc = this.incrementNumberFunc.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
	}

	/**
	 * Open the nav drawer.
	 * @memberof TestReduxPage
	 */
	drawerOpen() {
		this.props.navigation.navigate("DrawerOpen");
	}

	/**
	 * increment the given number using redux.
	 * @memberof TestReduxPage
	 */
	incrementNumberFunc() {
		this.props.actions.addNumberToState(this.state.numberToAdd);
	}

	/**
	 * Update the local state.
	 * @param {event} e event args.
	 * @memberof TestReduxPage 
	 */
	onChangeText(e) {
		let newValue = parseInt(e);
		this.setState({ numberToAdd: newValue });
	}

	/**
	 * Return the view of the component.
	 * @memberof TestReduxPage
	 */
	render() {
		return(
			<TestRedux 
            drawerOpen={this.drawerOpen} 
            numberToShow={this.props.test1} 
            incrementNumberFunc={this.incrementNumberFunc}
            onChangeText={this.onChangeText} />
		);
	}
}

TestReduxPage.propTypes = {
	navigation: PropTypes.object.isRequired,
	test1: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};

/**
 * Set the properties of the component by the global state (store).
 * @param {any} state 
 */
export function mapStateToProps(state) {
	return {
		test1: state.firstSlice.test1
	};
}

/**
 * Wraps the action from the action creator with "dispatch".
 * Finally map the actions object to the properties of the component.
 * @param {any} dispatch 
 */
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TestReduxPage);
