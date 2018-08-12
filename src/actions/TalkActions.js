import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import b64 from 'base-64'
import _ from 'lodash'

import { MODIFY_MESSAGE, SEND_MESSAGE, USER_TALK_LIST } from '../constants'

const modifyMessage = message => {
    return {
        type: MODIFY_MESSAGE,
        payload: message
    }
}

const sendMessage = data => {
    return dispatch => {
        const { currentUser } = firebase.auth()
        const currentEmail = currentUser.email

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
                        type: 'r'
                    })
                    .then(() => dispatch({ type: SEND_MESSAGE }))
            })
            .then(() => {
                firebase
                    .database()
                    .ref(`/userTalks/${emailB64}/${contactB64}`)
                    .set({
                        name: data.contactName,
                        email: data.contactEmail,
                        lastMessage: data.message
                    })
            })
            .then(() => {
                firebase
                    .database()
                    .ref(`/contacts/${emailB64}`)
                    .once('value')
                    .then(snapshot => {
                        const userData = _.first(_.values(snapshot.val()))

                        firebase
                            .database()
                            .ref(`/userTalks/${contactB64}/${emailB64}`)
                            .set({
                                name: userData.name,
                                email: currentEmail,
                                lastMessage: data.message
                            })
                    })
            })
    }
}

const fetchUserTalk = contactEmail => {
    return dispatch => {
        const { currentUser } = firebase.auth()
        const currentEmail = currentUser.email

        const emailB64 = b64.encode(currentEmail)
        const contactB64 = b64.encode(contactEmail)

        firebase
            .database()
            .ref(`/messages/${emailB64}/${contactB64}`)
            .on('value', snapshot => {
                const messages = _.map(snapshot.val(), (val, uid) => {
                    return {
                        ...val,
                        uid
                    }
                })
                
                dispatch({
                    type: USER_TALK_LIST,
                    payload: messages
                })
            })
    }
}

export {
    modifyMessage,
    sendMessage,
    fetchUserTalk
}