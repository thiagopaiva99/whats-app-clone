import { CONTACT_MODIFY_EMAIL } from '../constants';

const modifyEmail = text => {
    return {
        type: CONTACT_MODIFY_EMAIL,
        payload: text
    }
}

export {
    modifyEmail
}