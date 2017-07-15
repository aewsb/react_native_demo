/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SampleComponent from './components/SampleComponent/SampleComponent.js';

export default class react_native_demo extends Component {
  render() {
    return (
        <SampleComponent />
    );
  }
}


AppRegistry.registerComponent('react_native_demo', () => react_native_demo);
