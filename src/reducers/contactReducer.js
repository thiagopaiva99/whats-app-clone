import { CONTACT_MODIFY_EMAIL } from '../constants';

const INITIAL_STATE = {
    email: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_MODIFY_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        default:
            return state;
    }
}