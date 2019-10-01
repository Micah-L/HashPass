import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
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
const hex_alph = "0123456789abcdef"
const my_alph = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-+="
const default_passlength = 20
var background_color = '#fff'
var text_color = 'white'
var border_color = 'black'
import { MonoText } from '../components/StyledText';

/*

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
		
		<View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.
          </Text>
        </View>
		<View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
	  
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
*/
/*
      <View style={{flex: 1, padding: 10, backgroundColor: background_color}}>
	   <Button
			title = "Copy Password"
			color = "#f194ff"
			onPress = {() => Clipboard.setString(reEncode(Crypto.SHA512(this.state.secret  + Crypto.SHA512(this.state.key).toString()).toString(),hex_alph,this.state.alphabet).slice(0,this.state.passlength))}
		/>
        <Text style={{padding: 10, fontSize: 24}}>
          {reEncode(Crypto.SHA512(this.state.secret  + Crypto.SHA512(this.state.key).toString()).toString(),hex_alph,this.state.alphabet).slice(0,this.state.passlength)}		  
        </Text>
	  
		<Text> Secret: </Text>
        <View style = { styles.textBoxBtnHolder }>
        <TextInput
		  underlineColorAndroid = "transparent"
		  secureTextEntry={this.state.hide_secret}
          style = { styles.textBox }
          placeholder="Type a secret passphrase."
          onChangeText={(secret) => this.setState({secret})}
          value={this.state.secret}
        />
		<TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { () => this.setState({ hide_secret: !this.state.hide_secret }) }>
            <Image source = { ( this.state.hide_secret ) ? require('./assets/images/hide.png') : require('./assets/images/view.png') } style = { styles.btnImage } />
        </TouchableOpacity>
		</View>
		<Text> Key: </Text>
        <TextInput
		  
          style={{height: 40, borderColor: border_color, borderWidth: 1}}
          placeholder="Type a key. This could be a website or app you need a password for."
          onChangeText={(key) => this.setState({key})}
          value={this.state.key}
        />
		<Text>{"     "}</Text>
	    <Text style={{ borderBottomWidth: 30, borderColor: background_color}}> Only change the password length and characters if you know what you are doing. You should use the same length and characters each time. </Text>
		<Text color={text_color}> Password Length: </Text>
        <TextInput
          style={{height: 40}}
          placeholder={"Default: " + default_passlength.toString()}
          onChangeText={(passlength) => this.setState({passlength})}
          value={String(this.state.passlength)}
        />
		<Text> Characters (order matters): </Text>
        <TextInput
		  multiline
          style={{height: 80}}
          placeholder={"Default: " + my_alph}
          onChangeText={(alphabet) => this.setState({alphabet})}
          value={this.state.alphabet}
        />		
      </View>
*/

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {key: '', secret: '', hide_secret: true, generated_pass: '', passlength: default_passlength, alphabet: my_alph};
  }

  render() {
    return (
    <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>	
		
      <View style={styles.container}>
	   <Button
			title = "Copy Password"
			color = "#f194ff"
			onPress = {() => Clipboard.setString(reEncode(Crypto.SHA512(this.state.secret  + Crypto.SHA512(this.state.key).toString()).toString(),hex_alph,this.state.alphabet).slice(0,this.state.passlength))}
		/>
        <Text style={{padding: 10, fontSize: 24}}>
          {reEncode(Crypto.SHA512(this.state.secret  + Crypto.SHA512(this.state.key).toString()).toString(),hex_alph,this.state.alphabet).slice(0,this.state.passlength)}		  
        </Text>
	  
		<Text> Secret: </Text>
        <View style = { styles.textBoxBtnHolder }>
        <TextInput
		  underlineColorAndroid = "transparent"
		  secureTextEntry={this.state.hide_secret}
          style = { styles.textBox }
          placeholder="Type a secret passphrase."
          onChangeText={(secret) => this.setState({secret})}
          value={this.state.secret}
        />
		<TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { () => this.setState({ hide_secret: !this.state.hide_secret }) }>
            <Image source = { ( this.state.hide_secret ) ? require('../assets/images/hide.png') : require('../assets/images/view.png') } style = { styles.btnImage } />
        </TouchableOpacity>
		</View>
		<Text> Key: </Text>
        <TextInput
		  
          style={{height: 40, borderColor: border_color, borderWidth: 1}}
          placeholder="Type a key. This could be a website or app you need a password for."
          onChangeText={(key) => this.setState({key})}
          value={this.state.key}
        />
		<Text>{"     "}</Text>
	    <Text style={{ borderBottomWidth: 30, borderColor: background_color}}> Only change the password length and characters if you know what you are doing. You should use the same length and characters each time. </Text>
		<Text color={text_color}> Password Length: </Text>
        <TextInput
          style={{height: 40}}
          placeholder={"Default: " + default_passlength.toString()}
          onChangeText={(passlength) => this.setState({passlength})}
          value={String(this.state.passlength)}
        />
		<Text> Characters (order matters): </Text>
        <TextInput
		  multiline
          style={{height: 80}}
          placeholder={"Default: " + my_alph}
          onChangeText={(alphabet) => this.setState({alphabet})}
          value={this.state.alphabet}
        />		
      </View>
	</ScrollView>

    );
  }
}
/*
export default function HomeScreen() {
  return (
    <View style={styles.container}>
		


        

        


    </View>
  );
}*/

HomeScreen.navigationOptions = {
  title: 'HashPass',
};

/*function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}*/
/*
function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}*/



function reEncode(s, alpha, alphaNew) {
	const m1 = alpha.length;
	const m2 = alphaNew.length;
	var alphaVals = new Object();
	console.log("s: " + s)
	console.log("m1: " + m1 + "   m2: " + m2)
	let s_digits = [];
	
	for (let i = 0; i < m1; i++) {
		alphaVals[alpha[i]] = i;
	}

	for (let i = 0; i < s.length; i++) {
		s_digits[i] =  alphaVals[s[i]]
	}
	let new_digits = convertBase(s_digits, m1, m2);
	console.log("s_digits: " + s_digits.toString())
	console.log("new_digits: " + new_digits)
	let new_s = '';
	for (let i = 0; i < new_digits.length; i++) {
		new_s = alphaNew[new_digits[i]] + new_s
	}
	console.log(new_s)
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
 
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
