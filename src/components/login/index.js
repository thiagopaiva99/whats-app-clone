import React from 'react'
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { modifyEmail, modifyPass } from '../../actions/AuthActions'

const Login = props => (
    <ImageBackground style={{ flex: 1, width: null }} source={ require('../../assets/images/bg.png') }>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, backgroundColor: 'transparent' }}>WhatsApp</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput value={ props.email } onChangeText={ text => props.modifyEmail(text) } style={{ fontSize: 20, height: 45 }} placeholder='E-mail' placeholderTextColor='#fff' />
                <TextInput value={ props.password } onChangeText={ text => props.modifyPass(text) } style={{ fontSize: 20, height: 45 }} placeholder='Password' secureTextEntry={ true } placeholderTextColor='#fff' />
                <TouchableHighlight onPress={ () => Actions.register() }>
                    <Text style={{ fontSize: 20 }}>
                        Still don't have an account? <Text style={{ color: '#069' }} selectionColor='transparent'>Register Now!</Text>
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}>
                <Button title='Login' color='#115E54' onPress={ () => false } />
            </View>
        </View>
    </ImageBackground>
)

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password
    }
)
const actionCreators = {
    modifyEmail,
    modifyPass
}

export default connect(mapStateToProps, actionCreators)(Login)