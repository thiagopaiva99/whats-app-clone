const modifyEmail = text => {
    return {
        type: 'modify_email',
        payload: text
    }
}

export {
    modifyEmail
}