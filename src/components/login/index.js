import React from 'react'
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { modifyEmail } from '../../actions/AuthActions'

const Login = props => {
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, justifyContent: 'center', alignItems: 'center' }}>WhatsApp</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput value={ props.email } onChangeText={ text => props.modifyEmail(text) } style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
                <TextInput value={ props.password } style={{ fontSize: 20, height: 45 }} placeholder='Password' />
                <TouchableHighlight onPress={ () => Actions.register() }>
                    <Text style={{ fontSize: 20 }}>
                        Still don't have an account? <Text>Register Now!</Text>
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}>
                <Button title='Login' color='#115E54' onPress={ () => false } />
            </View>
       </View>
    )
}

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password
    }
)
const actionCreators = {
    modifyEmail
}

export default connect(mapStateToProps, actionCreators)(Login)