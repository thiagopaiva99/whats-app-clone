const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone: '',
    registerError: '',
    authError: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MODIFY_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'MODIFY_PHONE':
            return {
                ...state,
                phone: action.payload
            }

        case 'MODIFY_EMAIL':
            return {
                ...state,
                email: action.payload
            }
            
        case 'MODIFY_PASS':
            return {
                ...state,
                password: action.payload
            }
            
        case 'USER_CREATED':
            return {
                ...state,
                name: '',
                password: ''
            }
            
        case 'USER_NOT_CREATED':
            return {
                ...state,
                registerError: action.payload
            }
            
        case 'USER_LOGIN_NOT_SUCCESS':
            return {
                ...state,
                authError: action.payload
            }

        default:
            return state;
    }
}