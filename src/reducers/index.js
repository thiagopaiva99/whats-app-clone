import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import AppReducer from './appReducer';
import ContactReducer from './contactReducers';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ContactReducer
});