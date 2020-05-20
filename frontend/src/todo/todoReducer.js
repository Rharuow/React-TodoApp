import { 
    CHANGE_DESCRIPTION,
    TODO_SEARCHED,
    ADD_TODO,
    CLEAN_DISPLAY,
    CHANGE_STATUS,
} from '../actions/actionTypes'

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
            }
        case CLEAN_DISPLAY:
            return {
                ...state,
                description: ''
            }
        case CHANGE_STATUS:
            return {
                ...state,
            }
        default:
            return state
    }
}