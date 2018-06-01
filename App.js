/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Image,
  Text,
  View
} from 'react-native';

import RegistrationForm from './components/RegistrationForm'
import Login from './components/Login'
import AppTabNavigator from './components/navigator/AppTabNavigator'

export default class App extends Component {
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.formContainer}> */}
          <AppTabNavigator/>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  logo: {
    position: 'absolute',
    width: 400,
    height: 300
},
loginContainer:{
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center'
}
});
