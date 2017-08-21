import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from '../reducers/todoList'

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)

    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

export default createStore(combineReducers(reducers), applyMiddleware(logger));