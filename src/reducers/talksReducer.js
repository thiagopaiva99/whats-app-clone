import { USER_TALKS_LIST } from '../constants'

const INITIAL_STATE = {
    talks: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_TALKS_LIST:
            return {
                ...state,
                talks: action.payload
            }

        default:
            return {
                ...state
            }
    }
}