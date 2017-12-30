import React from "react";
import SideBar from "../../components/SideBar/SideBar"
import * as enzyme from "enzyme";
import * as Controllers from 'native-base';

function init() {
	const props = {
		routes: [
			"Test1",
			"Test2"
		],
		navigation: {
			navigate: jest.fn()
		}
	}

	const wrapper = enzyme.mount(<SideBar {...props} />);
	return { wrapper, props };
}


describe("<SideBar />", () => {
	it("should contains 'Container'", () => {
		//Arrange
		const { wrapper } = init();
		const container = wrapper.find(Controllers.Container).getElement();

		//Assert
		expect(container).not.toBeNull;
	});

	it("should contains 'List'", () => {
		//Arrange
		const { wrapper } = init();
		const List = wrapper.find(Controllers.List).getElement();

		//Assert
		expect(List).not.toBeNull();
	});

	it("should contains 'List' with same number as routes", () => {
		//Arrange
		const { wrapper, props } = init();
        const listLength = wrapper.find(Controllers.List).getElement().props.dataArray.length;
        
		//Assert
		expect(listLength).toBe(props.routes.length);
    });

    it("should contains 'ListItem's count as same number as routes", () => {
		//Arrange
        const { wrapper, props } = init();
        const listLength = wrapper.find(Controllers.ListItem).getElements().length;
        
		//Assert
		expect(listLength).toBe(props.routes.length);
    });
    
});
