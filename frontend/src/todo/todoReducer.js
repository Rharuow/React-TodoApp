import { CHANGE_DESCRIPTION, TODO_SEARCHED, ADD_TODO } from '../actions/actionTypes'

const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            }
        case TODO_SEARCHED:
            return {
                ...state,
                list: action.payload.data,
            }
        case ADD_TODO:
            return {
                ...state,
                description: ''
            }
        default:
            return state
    }
}