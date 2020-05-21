import axios from 'axios'

import { 
    CHANGE_DESCRIPTION,
    TODO_SEARCHED,
    CLEAN_DISPLAY,
} from './actionTypes'

const URL = `http://localhost:3003/api/todos`

export const changeDescription = event => {
    return ({
        type: CHANGE_DESCRIPTION,
        payload: event.target.value
    })
}

export const search = () => {
    //The middleware promise of redux-promise wait the response async and passed to next action to dispatch
    //THe middleware thunk allow that I use dispatch to define how sequence of <dispatchs></dispatchs>
    return (dispatch, getState ) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/`: ''
        //If const request was removed, the then state is reload before then method
        const request = axios.get(`${URL}?sort=-createdAt${search}`)    
            .then( res => dispatch({ type: TODO_SEARCHED, payload: res.data, }))
    }
}

export const cleanDisplay = () => {
    return [
        {type: CLEAN_DISPLAY},
        search()
    ]
}

export const addTodo = description => {

    //The middleware multi of redux-multi call multiple action on function dispatch

    return dispatch => {
        axios.post(URL, { description })
        .then(res => dispatch(cleanDisplay()))
        .then(res => dispatch(search()))
    }
}

export const handleMarkAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(res => dispatch(search()))
    }
}

export const handleMarkAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(res => dispatch(search()))
    }
}

export const handleRemove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(res => dispatch(search()))
    }
}