import { CONTACT_MODIFY_EMAIL, CONTACT_SAVE_ERROR } from '../constants';

const INITIAL_STATE = {
    email: '',
    error: ''
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

        default:
            return state;
    }
}