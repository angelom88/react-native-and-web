import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: .15,
        margin: 10
    },
    body: {
        flex: .7
    },
    footer: {
        flex: .15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 10
    },
    selectedLink: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16
    },
    unselectedLink: {
        color: 'blue'
    },
    textInput: {
        flex: 1,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: '#F0F0F0',
        borderRadius: 5
    },
    todoItem: {
        marginLeft: 10,
        padding: 5,
        fontSize: 16
    },
    completeItem: {
        textDecorationLine: 'line-through'
    },
    hr: {
        backgroundColor: '#CCCCCC',
        height: 1,
        margin: 10
    }
});