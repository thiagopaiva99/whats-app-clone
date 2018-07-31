import firebase from 'firebase';

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

const registerUser = user => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(user => console.log(user))
        .catch(error => console.log(error));

    return {
        type: 'teste'
    }
}

export {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone,
    registerUser
}