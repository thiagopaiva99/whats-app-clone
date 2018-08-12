import { MODIFY_MESSAGE } from '../constants'

const modifyMessage = message => {
    return {
        type: MODIFY_MESSAGE,
        payload: message
    }
}

export {
    modifyMessage
}