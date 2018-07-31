import { MODIFY_EMAIL, MODIFY_NAME, MODIFY_PHONE, MODIFY_PASS, USER_CREATED, USER_LOGIN_NOT_SUCCESS, USER_LOGIN_SUCCESS, USER_NOT_CREATED, LOADING, NOT_LOADING } from '../constants';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone: '',
    registerError: '',
    authError: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFY_NAME:
            return {
                ...state,
                name: action.payload
            }

        case MODIFY_PHONE:
            return {
                ...state,
                phone: action.payload
            }

        case MODIFY_EMAIL:
            return {
                ...state,
                email: action.payload
            }
            
        case MODIFY_PASS:
            return {
                ...state,
                password: action.payload
            }
            
        case USER_CREATED:
            return {
                ...state,
                name: '',
                password: '',
                loading: false
            }
            
        case USER_NOT_CREATED:
            return {
                ...state,
                registerError: action.payload,
                loading: false
            }

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            }
            
        case USER_LOGIN_NOT_SUCCESS:
            return {
                ...state,
                authError: action.payload,
                loading: false
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        case NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}