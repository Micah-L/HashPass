import React, { Component } from 'react';
import { View, Text } from "react-native";
import { ExpoConfigView } from '@expo/samples';



export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return ( 
	<View style = {{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',}}>
		<View style = {{flexDirection: 'row', justifyContent: 'center'}}>
			<Text> Coming Soon </Text>
		</View>
	</View>
	 );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
/*
// create a function that saves your data asyncronously
_storeData = async () => {
	try {
		await AsyncStorage.setItem('name', 'John');
	} catch (error) {
		// Error saving data
	}
}
// fetch the data back asyncronously
_retrieveData = async () => {
	try {
		const value = await AsyncStorage.getItem('name');
		if (value !== null) {
			// Our data is fetched successfully
			console.log(value);
		}
	} catch (error) {
		// Error retrieving data
	}
}*/