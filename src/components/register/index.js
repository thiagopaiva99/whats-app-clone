import React from 'react';
import { View, TextInput, Button, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { modifyName, modifyEmail, modifyPass, modifyPhone, registerUser } from '../../actions/AuthActions';

class Register extends React.Component {
    _registerUser() {
        const user = { name, phone, email, password } = this.props;
        this.props.registerUser(user);
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={ require('../../assets/images/bg.png') }>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, backgroundColor: 'transparent' }}>Create an Account</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <TextInput 
                            value={ this.props.name } 
                            onChangeText={ text => this.props.modifyName(text) } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='Name' 
                            placeholderTextColor='#fff' />

                        <TextInput 
                            value={ this.props.phone } 
                            onChangeText={ text => this.props.modifyPhone(text) } 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder='Phone' 
                            placeholderTextColor='#fff' />

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

                            <Text style={{ color: '#f00', fontSize: 18 }}>{this.props.error}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button title='Register' color='#115E54' onPress={ () => this._registerUser() } />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => (
    {
        name: state.AuthReducer.name,
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        phone: state.AuthReducer.phone,
        error: state.AuthReducer.registerError
    }
);

const actionCreators = {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone,
    registerUser
}

export default connect(mapStateToProps, actionCreators)(Register);