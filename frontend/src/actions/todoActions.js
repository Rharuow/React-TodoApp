import axios from 'axios'

import { CHANGE_DESCRIPTION, TODO_SEARCHED, ADD_TODO, CLEAN_DISPLAY } from './actionTypes'

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