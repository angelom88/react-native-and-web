import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
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
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 10
    },
    selectedLink: {
        flex: 1,
        fontWeight: 'bold'
    },
    unselectedLink: {
        color: 'blue'
    },
    textInput: {
        flex: 1,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC'
    },
    todoItem: {
        height: 40,
        margin: 10,
        padding: 10
    }
});