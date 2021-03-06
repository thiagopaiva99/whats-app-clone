import { MODIFY_MESSAGE, SEND_MESSAGE, USER_TALK_LIST } from '../constants'

const INITIAL_STATE = {
    message: '',
    talk: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        case SEND_MESSAGE:
            return {
                ...state,
                message: ''
            }

        case USER_TALK_LIST:
            return {
                ...state,
                talk: action.payload
            }

        default: 
            return state
    }
}