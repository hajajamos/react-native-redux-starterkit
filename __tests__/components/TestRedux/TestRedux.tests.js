import React from "react";
import * as enzyme from "enzyme";
import * as Controllers from 'native-base';
import TestRedux from './../../../components/TestRedux/TestRedux';
import { Title } from 'native-base';
import { TextInput } from 'react-native';

function init() {
	const props = {
		drawerOpen: jest.fn(),
		numberToShow: 0,
		incrementNumberFunc: jest.fn(),
		onChangeText: jest.fn(),
	}

	const wrapper = enzyme.shallow(<TestRedux {...props} />);
	return { wrapper, props };
}

describe("<TestRedux />", () => {
	it("Should contains 'Title'", () => {
		//Arrange
		const { wrapper } = init();
		const title = wrapper.find(Title);

		//Assert
		expect(title).not.toBeNull();
	});
    it("Should contains 'Title' with text 'TestRedux'", () => {
		//Arrange
		const { wrapper } = init();
		const title = wrapper.find(Title).props().children;

		//Assert
		expect(title).toBe("TestRedux");
    });
    it("Should contains 'TextInput'", () => {
		//Arrange
		const { wrapper } = init();
		const textInput = wrapper.find(TextInput).props();
	
		//Assert
		expect(textInput).not.toBeNull();
	});
	it("Click 'incrementNumberButton' should call incrementNumberFunc.", () => {
		//Arrange
		const { wrapper, props } = init();
		const incrementNumberButton = wrapper.find("#incrementNumberButton");
		expect(props.incrementNumberFunc).toHaveBeenCalledTimes(0);
		incrementNumberButton.props().onPress();
	
		//Assert
		expect(props.incrementNumberFunc).toHaveBeenCalledTimes(1);
	});
	
});
