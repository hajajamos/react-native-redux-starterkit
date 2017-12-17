import "react-native";
import * as Jest from "jest";
import React from "react";
import HomeScreenPage from "../components/HomeScreen/HomeScreenPage"
import renderer from "react-test-renderer";

it("renders correctly", () => {
	const homeScreenPage = renderer.create(<HomeScreenPage />).toJSON();
	expect(homeScreenPage).toBeTruthy();
});
