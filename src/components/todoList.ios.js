import React, { Component } from 'react';
import {
    Text, TextInput, ScrollView,
    View, Button
} from 'react-native'

import styles from '../styles/todoList.native.js';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    onText = (text) => {
        this.setState({ value: text });
    }

    onSummit = () => {
        this.props.onAddToDo(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return <View style={styles.header}>
            <TextInput style={styles.textInput}
                value={this.state.value}
                onChangeText={this.onText}
                onSubmitEditing={this.onSummit}
                placeholder="Add a new todo..."></TextInput>
        </View>
    }
}

const ShowToDos = ({ toDos, onClick }) =>
    <ScrollView style={styles.body}>{toDos.map(item =>
        <Text style={[styles.todoItem, { backgroundColor: item.completed ? 'red' : 'green' }]} key={item.id} onPress={() => onClick(item.id)}>{item.text}</Text>
    )}</ScrollView>

const Footer = ({ selectedFilter, onFilterChange }) =>
    <View style={styles.footer}>{['All', 'Active', 'Complete'].map(item => {
        let link = { style: styles.selectedLink };
        if (item !== selectedFilter) {
            link = { style: [link.style, styles.unselectedLink], onPress: () => onFilterChange(item) }
        }
        return <Text key={item} {...link}> {item} </Text>
    }
    )}</View>



export default { AddToDo, ShowToDos, Footer }