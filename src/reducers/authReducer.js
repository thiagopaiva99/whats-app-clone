const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone: ''
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'MODIFY_EMAIL') {
        return {
            ...state,
            email: action.payload
        }
    }

    if (action.type === 'MODIFY_PASS') {
        return {
            ...state,
            password: action.payload
        }
    }

    return state;
}