import axios from 'axios'

import { CHANGE_DESCRIPTION, TODO_SEARCHED, ADD_TODO } from './actionTypes'

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

    return ({
        type: TODO_SEARCHED,
        payload: request,
    })
}

export const addTodo = description => {
    return dispatch => {
        axios.post(URL, { description })
        .then(res => dispatch({ type: ADD_TODO, payload: request }))
        .then(res => dispatch(search()))
    }
}