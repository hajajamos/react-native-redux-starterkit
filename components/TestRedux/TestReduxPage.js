import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/testActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import TestRedux from './TestRedux';

class TestReduxPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			"numberToAdd": 0
		};
		//Bind the methods for context "this".
		this.drawerOpen = this.drawerOpen.bind(this);
		this.incrementNumberFunc = this.incrementNumberFunc.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
	}

	drawerOpen() {
		this.props.navigation.navigate("DrawerOpen");
	}

	incrementNumberFunc() {
		this.props.actions.addNumberToState(this.state.numberToAdd);
	}

	onChangeText(e) {
		let newValue = parseInt(e);
		this.setState({ numberToAdd: newValue });
	}

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
	navigation: PropTypes.object,
	test1: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		test1: state.firstSlice.test1
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TestReduxPage);
