import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import AppReducer from './appReducer';

export default combineReducers({
    AuthReducer,
    AppReducer
});