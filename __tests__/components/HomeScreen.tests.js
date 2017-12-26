import "react-native";
import * as Jest from "jest";
import React from "react";
import HomeScreen from "../../components/HomeScreen/HomeScreen"
import * as enzyme from "enzyme";
import { Title } from 'native-base';

function init() {
	const props = {
		openDrawer: jest.fn()
	}

	const wrapper = enzyme.shallow(<HomeScreen {...props} />);
	return { wrapper, props };
}


describe("<HomeScreen/>", () => {
	it("should contains 'title' with HomeScreen", () => {
		//Arrange
		const { wrapper } = init();
		const title = wrapper.find(Title).props().children;

		//Assert
		expect(title).toBe("HomeScreen");
	});

	it("button 'openDrawer' click will call to ", () => {
		//Arrange
		const { wrapper,props } = init();
		const openDrawer = wrapper.find("#openDrawer");
		expect(props.openDrawer).toHaveBeenCalledTimes(0);

		//Act
		openDrawer.simulate("press");
		
		//Assert
		expect(props.openDrawer).toHaveBeenCalledTimes(1);
	});

	it("button 'openDrawer2' click will call to ", () => {
		//Arrange
		const { wrapper,props } = init();
		const openDrawer = wrapper.find("#openDrawer2");
		expect(props.openDrawer).toHaveBeenCalledTimes(0);

		//Act
		openDrawer.simulate("press");
		
		//Assert
		expect(props.openDrawer).toHaveBeenCalledTimes(1);
	});
});
