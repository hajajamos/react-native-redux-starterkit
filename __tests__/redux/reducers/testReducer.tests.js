import React from "react";
import * as enzyme from "enzyme";
import TestReducer from "../../../redux/reducers/testReducer";
import initialState from "../../../redux/store/initialState";
import * as actionsTypes from "../../../redux/actions/actionsTypes";
import * as _ from "lodash";

function init() {
	const testReducer = TestReducer;
	return { testReducer };
}

describe("'testReducer'", () => {
	it("should set initial state by default", () => {
		//Arrange
		const { testReducer } = init();
		const action = { type: 'unknown' };
		const expected = initialState.firstSlice;

		//Act
		const result = testReducer(undefined, action);

		//Arrange
		expect(result).toEqual(expected);
	});

	it("should handle ADD_NUMBER_TO_STATE_SUCCESS", () => {
		//Arrange
		const { testReducer } = init();
		const numberToAdd = 2;
		const action = { type: actionsTypes.ADD_NUMBER_TO_STATE_SUCCESS, numberToAdd: numberToAdd };
		const initialStateCopy = _.cloneDeep(initialState);
		initialStateCopy.firstSlice.test1 += numberToAdd;

		//Act
		const result = testReducer(undefined, action);

		//Arrange
		expect(result).toEqual(initialStateCopy.firstSlice);
	});
});
