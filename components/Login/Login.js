/**
 * Sample Login page
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import LoginForm from './LoginForm.js';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source={require('../../imgs/logo.png')}/>
          <Text style={styles.title}>
            Welcome to MeetBuzz!
          </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#000000',
    marginTop: 10
  }
});

AppRegistry.registerComponent('Login', () => Login);
