import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, justifyContent: 'center', alignItems: 'center' }}>WhatsApp</Text>
        </View>
        <View style={{ flex: 2 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Password' />
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
);