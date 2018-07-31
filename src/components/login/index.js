import React from 'react'
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { modifyEmail, modifyPass, authUser } from '../../actions/AuthActions'

class Login extends React.Component {
    _authUser() {
        const user = { email, password } = this.props;

        this.props.authUser(user);
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={ require('../../assets/images/bg.png') }>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, backgroundColor: 'transparent' }}>WhatsApp</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput 
                            value={ this.props.email } 
                            onChangeText={ text => this.props.modifyEmail(text) } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='E-mail' 
                            placeholderTextColor='#fff' />

                        <TextInput 
                            value={ this.props.password } 
                            onChangeText={ text => this.props.modifyPass(text) } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='Password' 
                            secureTextEntry={ true } 
                            placeholderTextColor='#fff' />

                        <TouchableHighlight onPress={ () => Actions.register() }>
                            <Text style={{ fontSize: 20 }}>
                                Still don't have an account? <Text style={{ color: '#069' }} selectionColor='transparent'>Register Now!</Text>
                            </Text>
                        </TouchableHighlight>

                        <Text style={{ fontSize: 25, color: '#f00', backgroundColor: 'transparent' }}>{ this.props.error }</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button 
                            title='Login' 
                            color='#115E54' 
                            onPress={ () => this._authUser() } />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        error: state.AuthReducer.authError
    }
)
const actionCreators = {
    modifyEmail,
    modifyPass,
    authUser
}

export default connect(mapStateToProps, actionCreators)(Login)