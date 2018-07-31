import firebase from '@firebase/app';
import '@firebase/auth';

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

const userCreated = (dispatch) => {
    dispatch({
        type: 'USER_CREATED'
    });
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
            .then(user => userCreated(dispatch))
            .catch(error => userNotCreated(error, dispatch));
    }
}

export {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone,
    registerUser
}