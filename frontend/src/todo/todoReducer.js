import { 
    CHANGE_DESCRIPTION,
    TODO_SEARCHED,
    CLEAN_DISPLAY,
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
                list: action.payload,
            }
        case CLEAN_DISPLAY:
            return {
                ...state,
                description: ''
            }
        default:
            return state
    }
}