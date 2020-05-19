import CHANGE_DESCRIPTION from './actionTypes'

export const changeDescription = event => {
    console.log("ACTION")

    return ({
        type: CHANGE_DESCRIPTION,
        payload: event.target.value
    })
}