import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25 }}>Create an Account</Text>
        </View>
        <View style={{ flex: 3 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Name' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Phone' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Password' />
        </View>
        <View style={{ flex: 1 }}>
            <Button title='Register' color='#115E54' onPress={ () => false } />
        </View>
    </View>
);