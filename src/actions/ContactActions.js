import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { CONTACT_MODIFY_EMAIL, CONTACT_SAVE_ERROR } from '../constants';

const modifyEmail = text => {
    return {
        type: CONTACT_MODIFY_EMAIL,
        payload: text
    }
}

const addContact = email => {
    return dispatch => {
        const emailB64 = b64.encode(email);

        firebase
            .database()
            .ref(`/contacts/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
    
                } else {
                    dispatch({
                        type: CONTACT_SAVE_ERROR,
                        payload: 'Este usuário não existe'
                    })
                }
            })
    }
}

export {
    modifyEmail,
    addContact
}