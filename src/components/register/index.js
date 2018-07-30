import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { modifyName, modifyEmail, modifyPass, modifyPhone } from '../../actions/AuthActions';

const Register = props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, backgroundColor: 'transparent' }}>Create an Account</Text>
        </View>
        <View style={{ flex: 3 }}>
            <TextInput value={ props.name } onChangeText={ text => props.modifyName(text) } style={{ fontSize: 20, height: 45 }} placeholder='Name' />
            <TextInput value={ props.phone } onChangeText={ text => props.modifyPhone(text) } style={{ fontSize: 20, height: 45 }} placeholder='Phone' />
            <TextInput value={ props.email } onChangeText={ text => props.modifyEmail(text) } style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput value={ props.password } onChangeText={ text => props.modifyPass(text) } style={{ fontSize: 20, height: 45 }} placeholder='Password' secureTextEntry={ true } />
        </View>
        <View style={{ flex: 1 }}>
            <Button title='Register' color='#115E54' onPress={ () => false } />
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        name: state.AuthReducer.name,
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        phone: state.AuthReducer.phone
    }
);

const actionCreators = {
    modifyName,
    modifyEmail,
    modifyPass,
    modifyPhone
}

export default connect(mapStateToProps, actionCreators)(Register);