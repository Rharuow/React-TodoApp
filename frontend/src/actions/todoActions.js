import axios from 'axios'

import { 
    CHANGE_DESCRIPTION,
    TODO_SEARCHED,
    ADD_TODO,
    CLEAN_DISPLAY,
    CHANGE_STATUS,
    TODO_DELETE,
} from './actionTypes'

const URL = `http://localhost:3003/api/todos`

export const changeDescription = event => {
    return ({
        type: CHANGE_DESCRIPTION,
        payload: event.target.value
    })
}

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)

    //The middleware promise of redux-promise wait the response async and passed to next action to dispatch
    //THe middleware thunk allow that I use dispatch to define how sequence of dispatchs
    return dispatch => {
        dispatch({ type: TODO_SEARCHED, payload: request, })
        dispatch(clearDisplay())
    }
}

export const addTodo = description => {

    //The middleware multi of redux-multi call multiple action on function dispatch

    return dispatch => {
        axios.post(URL, { description })
        .then(res => dispatch({ type: ADD_TODO, payload: res }))
        .then(res => dispatch(search()))
    }
}

export const clearDisplay = () => {
    return {
        type: CLEAN_DISPLAY,
    }
}

export const handleMarkAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(res => dispatch({ type: CHANGE_STATUS }))
        .then(res => dispatch(search()))
    }
}

export const handleMarkAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(res => dispatch({ type: CHANGE_STATUS }))
        .then(res => dispatch(search()))
    }
}

export const handleRemove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(res => dispatch({ type: TODO_DELETE }))
        .then(res => dispatch(search()))
    }
}