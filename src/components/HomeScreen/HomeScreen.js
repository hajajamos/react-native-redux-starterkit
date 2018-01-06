import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import styles from "../Common/commonStyle";
import PropTypes from "prop-types";

/**
 * This is the view (stateless) component of "HomePage"
 * @param {function} { openDrawer } open the drawer by click. 
 */
const HomeScreen = ({ openDrawer }) =>
	(<Container>
		<Header>
			<Left>
				<Button
					id="openDrawer"
					transparent
					onPress={openDrawer}>
					<Icon name="menu" />
				</Button>
			</Left>
			<Body>
				<Title>HomeScreen</Title>
			</Body>
			<Right />
		</Header>
		<Content padder>
			<Card>
				<CardItem>
					<Body>
						<Text>Hello world!</Text>
					</Body>
				</CardItem>
			</Card>
			<Button full rounded dark
				id="openDrawer2"
				onPress={openDrawer}
				style={styles.commonButton}>
				<Text>Click me to see the menu</Text>
			</Button>
		</Content>
	</Container>);

HomeScreen.propTypes = {
	openDrawer: PropTypes.func.isRequired
};

export default HomeScreen;
