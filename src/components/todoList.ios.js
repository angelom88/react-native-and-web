import React, { Component } from 'react';
import {
    Text, TextInput,
    View, Button, Dimensions
} from 'react-native';

let { totalHeight } = Dimensions.get('window');


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
    <View style={{ height: totalHeight, padding: 5}}>{toDos.map(item =>
        <Text style={{ height: 40, backgroundColor: 'green', margin: 10, padding: 10}} key={item.id} onPress={() => onClick(item.id)}>{item.text}</Text>
    )}</View>

const Footer = ({ selectedFilter, onFilterChange }) =>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        height: 20
    }}>{['All', 'Active', 'Complete'].map(item => {
        let link = {};
        if (item !== selectedFilter) {
            link = { style: {fontWeight: 'bold', color: 'blue' }, onPress: () => onFilterChange(item) }
        }
        return <Text key={item} {...link}> {item} </Text>
    }
    )}</View>


export default { AddToDo, ShowToDos, Footer }