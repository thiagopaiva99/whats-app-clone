import { CONTACT_MODIFY_EMAIL, CONTACT_SAVE_ERROR, CONTACT_SAVE_SUCCESS } from '../constants';

const INITIAL_STATE = {
    email: '',
    error: '',
    saved: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_MODIFY_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        case CONTACT_SAVE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case CONTACT_SAVE_SUCCESS:
            return {
                ...state,
                saved: true
            }

        default:
            return state;
    }
}