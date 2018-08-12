import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import b64 from 'base-64';

import { MODIFY_MESSAGE, SEND_MESSAGE } from '../constants'

const modifyMessage = message => {
    return {
        type: MODIFY_MESSAGE,
        payload: message
    }
}

const sendMessage = data => {
    return dispatch => {
        const { currentUser } = firebase.auth()
        const currentEmail = currentEmail.email

        const emailB64 = b64.encode(currentEmail)
        const contactB64 = b64.encode(data.contactEmail)

        firebase
            .database()
            .ref(`/messages/${emailB64}/${contactB64}`)
            .push({
                message: data.message,
                type: 's'
            })
            .then(() => {
                firebase
                    .database()
                    .ref(`/messages/${contactB64}/${emailB64}`)
                    .push({
                        message: data.message,
                        type: 's'
                    })
                    .then(() => dispatch({ type: SEND_MESSAGE }))
            })
    }
}

export {
    modifyMessage,
    sendMessage
}