import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import b64 from 'base-64'
import _ from 'lodash'

import { USER_TALKS_LIST } from '../constants'

const fetchUserTalks = () => {
    const { currentUser } = firebase.auth()

    return dispatch => {
        const emailB64 = b64.encode(currentUser.email)

        firebase
            .database()
            .ref(`/userTalks/${emailB64}`)
            .on('value', snapshot => {
                dispatch({
                    type: USER_TALKS_LIST,
                    payload: snapshot.val()
                })
            })
    }
}

export {
    fetchUserTalks
}