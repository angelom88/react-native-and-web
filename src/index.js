import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { AddToDoContainer, ShowToDosContainer, FooterContainer } from './containers/todoList';
import store from './stores/todoList';

ReactDOM.render(<Provider store={store}>
    <div><AddToDoContainer /><ShowToDosContainer /><FooterContainer /></div>
</Provider>, document.getElementById('root'));