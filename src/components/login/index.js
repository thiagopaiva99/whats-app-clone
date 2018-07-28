import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default props => (
    <View>
        <View>
            <Text>WhatsApp Clone</Text>
        </View>
        <View>
            <TextInput placeholder='E-mail' />
            <TextInput placeholder='Senha' />
            <Text>Ainda não tem uma conta? Cadastre-se!</Text>
        </View>
        <View>
            <Button title='Logar' onPress={ () => false } />
        </View>
    </View>
);