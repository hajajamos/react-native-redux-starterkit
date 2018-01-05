import React from "react";
import * as enzyme from "enzyme";
import * as testActions from "../../../redux/actions/testActions";
import * as actionsTypes from "../../../redux/actions/actionsTypes";

function init() {
	const state = {
		"firstSlice": {
			"test1": 2
		}
	};
	return { state };
}

describe("'testActions' action creator.", () => {
	it("'addNumberToStateSuccess' should return action ADD_NUMBER_TO_STATE_SUCCESS and numberToAdd", () => {
		//Arrange
		const numberToAdd = 10;

		//Act
		const result = testActions.addNumberToStateSuccess(numberToAdd);

		//Assert
		expect(result.type).toBe(actionsTypes.ADD_NUMBER_TO_STATE_SUCCESS);
		expect(result.numberToAdd).toBe(numberToAdd);
	});

	it("'addNumberToState' should return action ADD_NUMBER_TO_STATE_SUCCESS and numberToAdd", () => {
		//Arrange
		const { state } = init();
		const dispatch = jest.fn();
		const numberToAdd = 10;
		const expected = {
			type: actionsTypes.ADD_NUMBER_TO_STATE_SUCCESS,
			numberToAdd: numberToAdd
		};

		//Act
		const addNumberToState = testActions.addNumberToState(numberToAdd);
		expect(typeof(addNumberToState)).toEqual('function');
		addNumberToState(dispatch);

		//Assert
		expect(dispatch).toBeCalledWith(expected);
	});
});
