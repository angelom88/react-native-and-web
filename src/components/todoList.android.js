import React, { Component } from 'react';
import {
    Text, TextInput, ScrollView,
    View, Button
} from 'react-native'

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
                height: 50,
                margin: 5,
                marginTop: 20,
                padding: 5,
                borderWidth: 1,
                borderColor: '#CCCCCC'
            }}
                value={this.state.value}
                onChangeText={this.onText}
                onSubmitEditing={this.onSummit}
                placeholder="Add a new todo..."></TextInput>
        </View>
    }
}

const ShowToDos = ({ toDos, onClick }) =>
    <ScrollView style={{ height: 550 }}>{toDos.map(item =>
        <Text style={{ height: 40, backgroundColor: item.completed ? 'red' : 'green', margin: 10, padding: 10 }} key={item.id} onPress={() => onClick(item.id)}>{item.text}</Text>
    )}</ScrollView>

const Footer = ({ selectedFilter, onFilterChange }) =>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 10,
        height: 30
    }}>{['All', 'Active', 'Complete'].map(item => {
        let link = { style: { flex: 1, fontWeight: 'bold' } };
        if (item !== selectedFilter) {
            link = { style: { fontWeight: 'bold', color: 'blue', flex: 1 }, onPress: () => onFilterChange(item) }
        }
        return <Text key={item} {...link}> {item} </Text>
    }
    )}</View>


export default { AddToDo, ShowToDos, Footer }