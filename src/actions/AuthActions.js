import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

const modifyName = text => {
    return {
        type: 'MODIFY_NAME',
        payload: text
    }
}

const modifyEmail = text => {
    return {
        type: 'MODIFY_EMAIL',
        payload: text
    }
}

const modifyPass = text => {
    return {
        type: 'MODIFY_PASS',
        payload: text
    }
}

const modifyPhone = text => {
    return {
        type: 'MODIFY_PHONE',
        payload: text
    }
}

const loggedUser = dispatch => {
    dispatch({
        type: 'USER_LOGIN_SUCCESS'
    });

    Actions.principal();
}

const notLoggedUser = (error, dispatch) => {
    dispatch({
        type: 'USER_LOGIN_NOT_SUCCESS',
        payload: error.message
    });
}

const authUser = user => {
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(response => loggedUser(dispatch))
            .catch(error => notLoggedUser(error, dispatch))
    }
}

const userCreated = (dispatch) => {
    dispatch({
        type: 'USER_CREATED'
    });

    Actions.welcome();
}

const userNotCreated = (error, dispatch) => {
    dispatch({
        type: 'USER_NOT_CREATED',
        payload: error.message
    });
}

const registerUser = user => {
    return dispatch => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                const emailB64 = b64.encode(user.email);

                firebase
                    .database()
                    .ref(`/contacts/${emailB64}`)
                    .push({
                        name: user.name,
                        phone: user.phone
                    })
                    .then(value => userCreated(dispatch));
            })
            .catch(error => userNotCreated(error, dispatch));
    }
}

export {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone,
    registerUser,
    authUser
}