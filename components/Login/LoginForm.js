/**
 * Sample Login page
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          keyboardType='email-address'
          placeholderTextColor='rgba(0,0,0,0.7)'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordIput.focus()}
          style={styles.input}
          />
        <TextInput
          placeholder="Password"
          placeholderTextColor='rgba(0,0,0,0.7)'
          returnKeyType='go'
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordIput = input}
          />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 10,
    color: '#000000',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);
