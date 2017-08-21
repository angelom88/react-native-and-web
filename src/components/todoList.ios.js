import React, { Component } from 'react';
import {
    Text, TextInput,
    View, Button
} from 'react-native';


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
        return <View>
            <TextInput style={{
                height: 80
            }}
                value={this.state.value}
                onChangeText={this.onText}
                onSubmitEditing={this.onSummit}
                placeholder="Add a new todo..."></TextInput>
        </View>
    }
}

const ShowToDos = ({ toDos, onClick }) =>
    <View>{toDos.map(item =>
        <Text key={item.id} onPress={() => onClick(item.id)}>{item.text}</Text>
    )}</View>

const Footer = ({ selectedFilter, onFilterChange }) =>
    <View>{['All', 'Active', 'Complete'].map(item => {
        let link = {};
        if (item !== selectedFilter) {
            link = { onPress: () => onFilterChange(item) }
        }
        return <Text key={item} {...link}> {item} </Text>
    }
    )}</View>


export default { AddToDo, ShowToDos, Footer }