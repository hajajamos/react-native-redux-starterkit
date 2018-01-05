import React from "react";
import PropTypes from "prop-types";
import {
	Container,
	Header,
	Left,
	Button,
	Icon,
	Body,
	Right,
	Content,
	Card,
	Title,
	CardItem,
	Text
} from "native-base";
import styles from "./../Common/commonStyle";
import { TextInput } from 'react-native';

const TestRedux = ({ drawerOpen, numberToShow, incrementNumberFunc, onChangeText }) =>
	(<Container>
	<Header>
		<Left>
			<Button
				transparent
				onPress={drawerOpen}>
				<Icon name="menu" />
			</Button>
		</Left>
		<Body>
			<Title>TestRedux</Title>
		</Body>
		<Right />
	</Header>
	<Content padder>
		<Card>
			<CardItem>
				<Body>
					<Text>numberToShow</Text>
					<Text id="NumberToShow">{numberToShow}</Text>
				</Body>
			</CardItem>
		</Card>
					<TextInput keyboardType="phone-pad"
								name="numberToAdd"
								onChangeText={onChangeText}/>
		
		<Button full rounded dark
			id="incrementNumberButton"
			style={styles.commonButton}
			onPress={incrementNumberFunc}>
			<Text>ClickMe</Text>
		</Button>
	</Content>
</Container>);

TestRedux.propTypes = {
	drawerOpen: PropTypes.func.isRequired,
	numberToShow: PropTypes.number.isRequired,
	incrementNumberFunc: PropTypes.func.isRequired,
	onChangeText: PropTypes.func.isRequired,
};

export default TestRedux;
