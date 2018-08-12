import { MODIFY_MESSAGE, SEND_MESSAGE } from '../constants'

const modifyMessage = message => {
    return {
        type: MODIFY_MESSAGE,
        payload: message
    }
}

const sendMessage = data => {
    return {
        type: SEND_MESSAGE
    }
}

export {
    modifyMessage,
    sendMessage
}