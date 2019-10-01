import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
	<Text style={styles.titleText}> How to use: </Text>
		<View style={styles.textBox}>
			<Text style={styles.baseText}> 
			Use a secure passphrase for the secret. This could be 5 or more random words. 
			</Text>
			<Text style={styles.baseText}>
			Whenever you need a password, think of a key you will remember. 
			This part does not need to be secure. 
			It could be the name of the service, for example. 
			</Text>
			<Text style={styles.baseText}>
			Backup your secret somewhere safe, or memorize it. Each pair (secret, key) will generate the same password.
			</Text>
		</View>
	<Text style={styles.titleText}> How it works: </Text>
		<View style={styles.textBox}>
			<Text style={styles.baseText}>
			This program computes Hash(secret || Hash(key)). By default, Hash is SHA512. 
			The hexadecimal number is then converted to a new number system using the given character set, which by default is base 73.
			Then the first few characters are taken (default: 20) for the password.
			</Text>
		</View>
    </ScrollView>
  );
}

AboutScreen.navigationOptions = {
  title: 'About',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  baseText: {
  },
  textBox: {
	justifyContent: 'center', 
	padding: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },  
});