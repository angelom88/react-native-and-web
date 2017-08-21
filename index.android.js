import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { AddToDoContainer, ShowToDosContainer, FooterContainer } from './src/containers/todoList';
import store from './src/stores/todoList';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ReactNativeWeb extends Component {
  render() {
    return (
      <Provider store={store}>
        <View><AddToDoContainer /><ShowToDosContainer /><FooterContainer /></View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);