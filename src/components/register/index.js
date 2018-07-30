import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';

const Register = props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25 }}>Create an Account</Text>
        </View>
        <View style={{ flex: 3 }}>
            <TextInput value={ props.name } style={{ fontSize: 20, height: 45 }} placeholder='Name' />
            <TextInput value={ props.phone } style={{ fontSize: 20, height: 45 }} placeholder='Phone' />
            <TextInput value={ props.email } style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput value={ props.password } style={{ fontSize: 20, height: 45 }} placeholder='Password' />
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

export default connect(mapStateToProps, null)(Register);