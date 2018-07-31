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

const userCreated = () => {
    return {
        type: 'success'
    }
}

const userNotCreated = () => {
    return {
        type: 'error'
    }
}

const registerUser = user => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(user => userCreated())
        .catch(error => userNotCreated(error));

    return {
        type: 'error'
    }
}

export {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone,
    registerUser
}