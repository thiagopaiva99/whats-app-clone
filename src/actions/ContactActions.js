const modifyEmail = text => {
    return {
        type: 'MODIFY_EMAIL',
        payload: text
    }
}

export {
    modifyEmail
}