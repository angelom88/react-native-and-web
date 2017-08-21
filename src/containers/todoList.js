import { connect } from 'react-redux'
import actions from '../actions/todoList'
import components from '../components/todoList'

export const AddToDoContainer = connect(null,
    { onAddToDo: actions.addToDo }
)(components.AddToDo);

export const ShowToDosContainer = connect(state => ({ toDos: getVisibleTodos(state.toDos, state.filter) }),
    { onClick: actions.toggleTodo }
)(components.ShowToDos);

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'Active':
            return todos.filter(t => !t.completed)
        case 'Complete':
            return todos.filter(t => t.completed)
        default:
            return todos
    }
}

export const FooterContainer = connect(state => { return { selectedFilter: state.filter } },
    { onFilterChange: actions.changeFilter }
)(components.Footer);