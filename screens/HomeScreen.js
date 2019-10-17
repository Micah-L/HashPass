import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import {
  Button,	
  Clipboard,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Item,
  Input,
  Icon,
  Label,
} from 'react-native';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
const Crypto = require('crypto-js');
const hex_alph = "0123456789abcdef";
const my_alph = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-+=";
const default_passlength = 16;
const default_passphrase_length = 5;
var background_color = '#fff';
var button_color = "#c194ef";
import KeyboardShift from '../components/KeyboardShift';

const {wordlist} = require('../resources/wordlist');

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: '', 
			secret: '', 
			hide_password: false, 
			hide_secret: true,
			show_characters: true,
			generated_pass: '',
			passlength: default_passlength,
			charpasslength: default_passlength, 
			wordpasslength: default_passphrase_length,			
			alphabet: my_alph };
	}
render() { return (     
<KeyboardShift> 
<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>	
<View style={styles.container}>
	<Button
	 title = "Show/Hide Password"
	 color = "#c194ef"
	 onPress = {() => this.setState({hide_password: !this.state.hide_password}) }
	/>
	<Text>{"     "}</Text>
	<Button
	 title = "Copy Password"
	 color = "#c194ef"
	 onPress = {() => 
		{
		Toast.showWithGravity('Password copied to clipboard.',  Toast.SHORT,  Toast.CENTER);
		Clipboard.setString(getPassword(this.state.secret,this.state.key, this.state.alphabet, this.state.passlength)); 		
		}}
	/>
	<View style = {{flexDirection: 'row', justifyContent: 'center'}}>
		<Text style={{padding: 10, fontSize: 20, fontFamily: "space-mono"}}>
			{this.state.hide_password ? '***Password Hidden***' : this.state.key == '' || this.state.secret == '' || this.state.alphabet == '' ? 'Your password will appear here' : getPassword(this.state.secret,this.state.key, this.state.alphabet, this.state.passlength) }	 	  
		</Text>
	</View>
	<Text> Secret: </Text>
	<View style = { styles.textBoxBtnHolder }>
		<TextInput
		 underlineColorAndroid = "transparent"
		 secureTextEntry={this.state.hide_secret}
		 style = { styles.textBox }
		 autoCorrect={false} 
		 autoCapitalize={"none"}
		 autoCompleteType={"off"}
		 placeholder="Type a secret passphrase."
		 onChangeText={(secret) => this.setState({secret})}
		 value={this.state.secret}
		/>
		<TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { () => this.setState({ hide_secret: !this.state.hide_secret }) }>
			<Image source = { ( this.state.hide_secret ) ? require('../assets/images/hide.png') : require('../assets/images/view.png') } style = { styles.btnImage } />
		</TouchableOpacity>
	</View>
	<Text> Key: </Text>
	<View style = { styles.textBoxBtnHolder }>
		<TextInput
		 underlineColorAndroid = "transparent"
		 style={styles.textBox}
		 placeholder="This could be a website or app you need a password for."
		 onChangeText={(key) => this.setState({key})}
		 value={this.state.key}
		/>
		<TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { () => this.setState({ key: '' }) }>
			<Image source = { require('../assets/images/x.png')} style = { styles.btnImage } />
		</TouchableOpacity>
	</View>
	<Text>{"     "}</Text>	    
	{this.state.show_characters &&
	<View>
		<Text> Password Length: </Text>
		<TextInput
		 style={{height: 40}}
		 placeholder={"Default: " + default_passlength.toString()}
		 onChangeText={(charpasslength) => this.setState({charpasslength: charpasslength, passlength: charpasslength})}
		 value={String(this.state.charpasslength)}
		 keyboardType={'number-pad'}
		/>
	</View> }
	{!this.state.show_characters &&
	<View>
		<Text> Passphrase Length: </Text>
		<TextInput
		 style={{height: 40}}
		 placeholder={"Default: " + default_passlength.toString()}
		 onChangeText={(wordpasslength) => this.setState({wordpasslength: wordpasslength, passlength: wordpasslength})}
		 value={String(this.state.wordpasslength)}
		/>
	</View> }
	<Button
	 title = {this.state.show_characters ? "Use Wordlist" : "Use Characters"}
	 color = "#c194ef"
	 onPress = {() => {
		 this.setState({show_characters: !this.state.show_characters}) 
		 if (this.state.show_characters) { this.setState({alphabet: wordlist, passlength: this.state.wordpasslength}) }
		 else {  this.setState({alphabet: my_alph, passlength: this.state.charpasslength}) }
		}}
	/>
	{this.state.show_characters && 
	<View> 
		<Text> Characters (order matters): </Text>
		<TextInput
		 multiline
		 style={{height: 100, fontFamily: "space-mono"}}
		 placeholder={"Default: " + my_alph}
		 onChangeText={(alphabet) => this.setState({alphabet})}
		 value={this.state.alphabet}
		/>
	</View>}
	<Text> Password security: </Text>
	<Text> {Math.floor(Math.log2(this.state.alphabet.length ** this.state.passlength)) } bits </Text>
</View>
</ScrollView>
</KeyboardShift>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'HashPass',
};

//getPassword(this.state.secret,this.state.key, this.state.alphabet, this.state.length)
function getPassword(secret,key,alphabet,length, capitalize = true) {
	if (typeof alphabet === 'string')
	{
		return reEncode(Crypto.SHA512(secret  + Crypto.SHA512(key).toString()).toString(),hex_alph, alphabet).slice(0,length)
	}
	else
	{	
		let pass = reEncode(Crypto.SHA512(secret  + Crypto.SHA512(key).toString()).toString(),hex_alph, alphabet).slice(0,length).join(" ")
		if (capitalize)
		{
			return pass.slice(0,1).toUpperCase() + pass.slice(1)
		}
		else
		{
			return pass
		}
	}
}

function reEncode(s, alpha, alphaNew) {
	const m1 = alpha.length;
	const m2 = alphaNew.length;
	var alphaVals = new Object();
	//console.log("s: " + s)
	//console.log("m1: " + m1 + "   m2: " + m2)
	let s_digits = [];
	
	for (let i = 0; i < m1; i++) {
		alphaVals[alpha[i]] = i;
	}

	for (let i = 0; i < s.length; i++) {
		s_digits[i] =  alphaVals[s[i]]
	}
	let new_digits = convertBase(s_digits, m1, m2);
	//console.log("s_digits: " + s_digits.toString())
	//console.log("new_digits: " + new_digits)
	
	var new_s
	if (typeof alphaNew === 'string') 
	{
		new_s = '';
	}
	else 
	{
		new_s = [];
	}
	for (let i = 0; i < new_digits.length; i++) {
		if (typeof alphaNew === 'string') 
		{ 
			new_s = alphaNew[new_digits[i]] + new_s;
		}
		else 
		{ 
			new_s.push(alphaNew[new_digits[new_digits.length - 1 - i]])
		}
	}
	//console.log(new_s)
	return new_s;
}
function convertBase(digits, fromBase, toBase) {
    const add = (x, y, base) => {
        let z = [];
        const n = Math.max(x.length, y.length);
        let carry = 0;
        let i = 0;
        while (i < n || carry) {
            const xi = i < x.length ? x[i] : 0;
            const yi = i < y.length ? y[i] : 0;
            const zi = carry + xi + yi;
            z.push(zi % base);
            carry = Math.floor(zi / base);
            i++;
        }
        return z;
    }

    const multiplyByNumber = (num, x, base) => {
        if (num < 0) return null;
        if (num == 0) return [];

        let result = [];
        let power = x;
        while (true) {
            num & 1 && (result = add(result, power, base));
            num = num >> 1;
            if (num === 0) break;
            power = add(power, power, base);
        }

        return result;
    }
	digits.reverse()
    let outArray = [];
    let power = [1];
    for (let i = 0; i < digits.length; i++) {
        digits[i] && (outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase));
        power = multiplyByNumber(fromBase, power, toBase);
    }
	return outArray;
}

const styles = StyleSheet.create({
	container:
  {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: background_color,
  },
	contentContainer: 
  {
    paddingTop: 30,
  },
	textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
	textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5
  },
	visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
	btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }, 
});
