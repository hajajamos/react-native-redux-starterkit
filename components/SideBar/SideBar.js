import React from "react";
import { Image } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import PropTypes from "prop-types";

/**
 * The view component of the side navigation.
 * @param {array} { routes } array of routes names.
 * @param {object} { navigation } navigation object.
 */
const SideBar = ({ routes, navigation }) => {
	return(
		<Container>
				<Content>
					<Image
						source={{
							uri: "https://cdn-media-2.lifehack.org/wp-content/files/2015/03/Having-Soft-Heart.jpg"
						}}
						style={{
							height: 120,
							alignSelf: "stretch",
							justifyContent: "center",
							alignItems: "center"
						}}>
						<Image
							square
							style={{ height: 80, width: 70 }}
							source={{
								uri: "https://cdn-media-2.lifehack.org/wp-content/files/2015/03/Having-Soft-Heart.jpg"
							}}
						/>
					</Image>
					<List
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => navigation.navigate(data)}>
									<Text>{data}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
	);
};

SideBar.propTypes = {
	navigation: PropTypes.object.isRequired,
	routes: PropTypes.array.isRequired
};

export default SideBar;
