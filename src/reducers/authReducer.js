const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone: ''
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'MODIFY_NAME') {
        return {
            ...state,
            name: action.payload
        }
    }

    if (action.type === 'MODIFY_PHONE') {
        return {
            ...state,
            phone: action.payload
        }
    }

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