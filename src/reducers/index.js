import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import AppReducer from './appReducer';
import ContactReducer from './contactReducer';
import TalkReducer from './talkReducer';
import TalksReducer from './talksReducer';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ContactReducer,
    TalkReducer,
    TalksReducer
});