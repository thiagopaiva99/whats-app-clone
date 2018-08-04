import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import AppReducer from './appReducer';
import ContactReducers from './contactReducers';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ContactReducers
});