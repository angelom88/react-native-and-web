import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { AddToDoContainer, ShowToDosContainer, FooterContainer } from './containers/todoList';
import store from './stores/todoList';
import styles from './styles/todoList.native.js';
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