const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone: '',
    registerError: '',
    authError: ''
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

    if (action.type === 'USER_CREATED') {
        return {
            ...state,
            name: '',
            password: ''
        }
    }

    if (action.type === 'USER_NOT_CREATED') {
        return {
            ...state,
            registerError: action.payload
        }
    }

    if (action.type === 'USER_LOGIN_NOT_SUCCESS') {
        return {
            ...state,
            authError: action.payload
        }
    }

    return state;
}