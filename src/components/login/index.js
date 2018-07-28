import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 25, justifyContent: 'center', alignContent: 'center' }}>WhatsApp</Text>
        </View>
        <View style={{ flex: 2 }}>
            <TextInput style={{ fontSize: 20, height: 45 }}  placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} visible-password='no' placeholder='Senha' />
            <Text style={{ fontSize: 20 }}>Ainda não tem uma conta? Cadastre-se!</Text>
        </View>
        <View style={{ flex: 2 }}>
            <Button title='Logar' color='#115E54' onPress={ () => false } />
        </View>
    </View>
);