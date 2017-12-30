import React from "react";
import * as enzyme from "enzyme";
import HomeScreenPage from './../../components/HomeScreen/HomeScreenPage';
import HomeScreen from "../../components/HomeScreen/HomeScreen";

function init() {
	const props = {
		navigation: {
			navigate: jest.fn()
		}
	}
	const wrapper = enzyme.shallow(<HomeScreenPage {...props} />);
	return { wrapper, props };
}

describe("<HomeScreenPage />", () => {
	it("should contains 'homeScreen' component", () => {
		//Arrange
		const { wrapper } = init();
		const homeScreen = wrapper.find(HomeScreen);

		//Assert
		expect(homeScreen).not.toBeNull;
	});
});
