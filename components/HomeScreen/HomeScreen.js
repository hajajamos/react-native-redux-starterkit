import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import styles from "../Common/commonStyle";
import PropTypes from "prop-types";

const HomeScreen = ({ openDrawer }) =>
	(<Container>
		<Header>
			<Left>
				<Button
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
