import { MODIFY_MESSAGE } from '../constants'

const INITIAL_STATE = {
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        default: 
            return state
    }
}