import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import _ from 'lodash';

import { CONTACT_MODIFY_EMAIL, CONTACT_SAVE_ERROR } from '../constants';

const modifyEmail = text => {
    return {
        type: CONTACT_MODIFY_EMAIL,
        payload: text
    }
}

const contactSaveError = (error, dispatch) => {
    dispatch({
        type: CONTACT_SAVE_ERROR,
        payload: error
    })
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
                    const userData = _.first(_.values(snapshot.val()));

                    const { currentUser } = firebase.auth()
                    const currentUserEmailB64 = b64.encode(currentUser.email)

                    const contact = {
                        email,
                        name: userData.name
                    }

                    firebase
                        .database()
                        .ref(`/userContacts/${currentUserEmailB64}`)
                        .push(contact)
                        .then(() => console.log(res))
                        .catch(err => contactSaveError(error.message, dispatch))
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