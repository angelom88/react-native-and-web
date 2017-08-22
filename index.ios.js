import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { AddToDoContainer, ShowToDosContainer, FooterContainer } from './src/containers/todoList';
import store from './src/stores/todoList';
import styles from './src/styles/todoList.native.js';
import { AppRegistry, View } from 'react-native';


export default class ReactNativeWeb extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}><AddToDoContainer /><ShowToDosContainer /><FooterContainer /></View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);