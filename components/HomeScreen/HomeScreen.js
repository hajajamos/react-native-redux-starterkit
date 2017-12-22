import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import styles from "../Common/commonStyle";
import PropTypes from "prop-types";

const HomeScreen = ({ DrawerOpen }) =>
	(<Container>
		<Header>
			<Left>
				<Button
					transparent
					onPress={DrawerOpen}>
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
						<Text>Chat App to talk some awesome people!</Text>
					</Body>
				</CardItem>
			</Card>
			<Button full rounded dark
				style={styles.commonButton}>
				<Text>Chat With People</Text>
			</Button>
			<Button full rounded primary
				style={styles.commonButton}>
				<Text>Goto Profiles</Text>
			</Button>
		</Content>
	</Container>);

HomeScreen.propTypes = {
	DrawerOpen: PropTypes.func.isRequired
};

export default HomeScreen;
