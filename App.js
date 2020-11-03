import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/pages/routes'
import { StatusBar } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}
