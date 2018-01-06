import React from "react";
import * as enzyme from "enzyme";
import { TestReduxPage, mapStateToProps } from "./../../../components/TestRedux/TestReduxPage";
import TestRedux from "./../../../components/TestRedux/TestRedux";

/**
 * Initialize the necessary objects for this test file.
 * 
 * @returns An object contains component wrapper and the properties required by the wrapper.
 */
function init() {
	const props = {
		navigation: {
			navigate: jest.fn()
		},
		actions: {
			addNumberToState: jest.fn()
		},
		test1: 0
	};

	const store = {
		firstSlice: {
			test1: 0
		}
	};

	const wrapper = enzyme.mount(<TestReduxPage {...props} />);
	return { wrapper, props, store };
}

describe("<TestReduxPage/>", () => {
	it("mapStateToProps should test1 from slice1", () => {
		//Arrange
		const { wrapper, store } = init();

		//Act
		const props = mapStateToProps(store);

		//Assert
		expect(props.test1).toBe(store.firstSlice.test1);
	});

	it("should contains <TestRedux/>", () => {
		//Arrange
		const { wrapper, store } = init();

		//Act
		const testRedux = wrapper.find(TestRedux);

		//Assert
		expect(testRedux).not.toBeNull();
	});

	it("drawerOpen should open drawer", () => {
		//Arrange
		const { wrapper, props, store } = init();
		expect(props.navigation.navigate).toHaveBeenCalledTimes(0);

		//Act
		const testRedux = wrapper.find(TestRedux);
		testRedux.props().drawerOpen();

		//Assert
		expect(props.navigation.navigate).toHaveBeenCalledTimes(1);
	});

	it("incrementNumberFunc should calls addNumberToState", () => {
		//Arrange
		const { wrapper, props, store } = init();
		expect(props.actions.addNumberToState).toHaveBeenCalledTimes(0);

		//Act
		const testRedux = wrapper.find(TestRedux);
		testRedux.props().incrementNumberFunc();

		//Assert
		expect(props.actions.addNumberToState).toHaveBeenCalledTimes(1);
    });

	it("onChangeText should change the state", () => {
		//Arrange
		const { wrapper, props, store } = init();
		const firstState = wrapper.state().numberToAdd;
		const expected = 10;

		//Act
		const testRedux = wrapper.find(TestRedux);
		testRedux.props().onChangeText(expected);

		//Assert
		expect(wrapper.state().numberToAdd).not.toEqual(firstState);
		expect(wrapper.state().numberToAdd).toEqual(expected);
    });

});
