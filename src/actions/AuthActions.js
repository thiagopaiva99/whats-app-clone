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

export {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone
}